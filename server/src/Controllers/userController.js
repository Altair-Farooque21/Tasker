const userModel = require("../Models/user");
const verifyModel  = require("../Models/verificationCode");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "S3CR3T_T@K3R_@0863";
const sgMail = require('@sendgrid/mail');

// Set SendGrid API key
sgMail.setApiKey(process.env.SECRET_SENDGRID_API_KEY);

const signup = async (req,res) =>{
    // existing user check
    const {username , email , password} = req.body;
    try{
        const existinguser = await userModel.findOne({  email: email  });

        if(existinguser){
            return res.status(400).json({message : "User Already exists"})
        }
        // hashing password
        const hashedPassword = await bcrypt.hash(password,10);
        // user create
        const result  = await userModel.create({
            email : email,
            password : hashedPassword,
            username : username
        });
        // token generate
        const token = jwt.sign({
            email: result.email,
            id: result._id
        },
        SECRET_KEY);

        // sending response to client
        res.status(201).json({user:result,token:token});

    }
    catch (error){
        console.log(error);
        res.status(500).json({message : "Something went wrong"})
    }

}

const signin = async (req,res) =>{
    const {email , password} = req.body;

    try{
        const existinguser = await userModel.findOne({email:email});
        if(!existinguser){
            return res.status(404).json({message : "User not exists"})
        }
        const matchPassword = await bcrypt.compare(password,existinguser.password);
        
        if(!matchPassword){
            return res.status(400).json({message: "Invalid Credentials"})
        }

        const token = jwt.sign({
            email: existinguser.email,
            id: existinguser._id
        },
        SECRET_KEY,{ expiresIn: '3h' });

        return res.status(200).json({
            user: existinguser,
            token : token
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({message : "Something went wrong"})
    }
    
}
const sendVerificationCode = async (req,res)=>{
      // In this function we will store verify code in the database temporarily
      // then send this code to the email 
      const userEmail = req.body.email;
      const verificationCode = Math.floor(100000 + Math.random() * 900000);
      try {
            const verifyUser = await verifyModel.create({
                email: userEmail,
                code: verificationCode,
                expirationTimestamp: new Date(new Date().getTime() + 10 * 60 * 1000) // code expires in 10 mins
            })
            // sending code to email
            const msg = {
                to : userEmail,
                from: "altairFarooqueDeveloper@gmail.com",
                subject: 'Verification Code',
                text: `Your verification code is : ${verificationCode}  \n this code expires in 10 mins`,
            }
            const sendCode = await sgMail.send(msg);
            res.status(200).json({ message :"Verification code send Succefuuly", sendCode:sendCode})
      }catch (error) {
        console.log(error);
        res.status(500).json({message:"Error while sending code!"})
      }
}
const verifyCodeFromClient = async (req,res) =>{
      const { email, userCode }= res.body;
      try {
        const result  = await verifyModel.findOne({email:email});
        if(result.code === userCode){
            res.status(200).json({message:"Verification Successful" , verifyStatus : "0001"});
        }
        else{
            res.status(404).json({
                message : "Inavlid code",
                verifyStatus : "0000"
            });
        }
        
      } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error while verifying code!"})
      }
      
}

module.exports = {signin,signup,verifyCodeFromClient,sendVerificationCode};