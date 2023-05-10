const userModel = require("../Models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "SECRET_KEY_0863";

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
        SECRET_KEY);

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


module.exports = {signin,signup};