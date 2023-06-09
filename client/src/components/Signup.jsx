import React ,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {checkUsername,checkEmail,validateFrom} from "../utils/FormValidations/SignupValidations";
import axios from 'axios';

import FormElement from './common/FromElement';
import css from "../styles/Signup.module.css";

function Signup() {

  // persisting form input data
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword :''
  });

  const [formErrors,setformErrors] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword :''
  })

  // for navigating through routes
  const navigate = useNavigate()

  // for handling form elements 
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // this will cache token for future requests
  // then navigates to email Verification page
  const onUserRegistration = (token,userID,email) => {
    sessionStorage.setItem('authToken',token);
    sessionStorage.setItem("userID",userID);
    sessionStorage.setItem('email',email);
    // if successful signup ,we will send verification code to verify email
    onSignupSendVerificationCode();
    // navigating to verifcation page for code
    navigate('/verification',{ replace:true });
  }

  const onSignupSendVerificationCode = async ()=>{
        const email  = formData.email;
        try {
          const response =  await axios.post('/users/send-Verification-Code',{email:email},{
            headers: {
                'Content-Type': 'application/json'
              }
          });
          console.log(response);
        }catch (error) {
          console.error(error);
        }
  }
  // this will send form data to backend 
  // if user didn't exists and new user will registered 
  // then token will be returned as response from server or backend 
  const sendSingUpFrom = (event) =>{
      event.preventDefault()
      let validatationCheck = validateFrom(formData,formErrors,setformErrors)
      if(validatationCheck){
        // console.log('checked')
       }
       else{
        registerSignupEntry(event)
       }
  }
  const registerSignupEntry = async (event) => {
    // prevents from refreshing on form submit
    event.preventDefault();
    // console.log(formData);
    const Data = {
      username: formData.userName,
      email: formData.email,
      password: formData.password,
    }
    // comparing passwords before sending
    try{
       // making a post request in axios to server
        const response = await axios.post('/users/signup',Data,{
                headers: {
                    'Content-Type': 'application/json'
                  }
              });
        // getting reponse from server both status and data
        // console.log(response.data); // Handle the response from the server
        const jwtToken = response.data.token;
        const userId = response.data.user._id;

        // call for redirect to verification page
        onUserRegistration(jwtToken,userId,formData.email);
        }
    catch (error) {// catching errors if request failed
        setformErrors(formErrors => ({
          ...formErrors,
          userName: checkUsername(error.response.data.errorCode,formData.userName),
          email: checkEmail(error.response.data.errorCode,formData.email),
        }));
        console.error("Invalid form data");
      }
  };

  return (
    <div className={css.mainWrapper}>
      <p className={css.title}>
        <span> Create </span> an Account
      </p>
      <p className={css.subTitle}>
          Sign Up for Our Task Management Tool
      </p>
      <div className={css.formWrapper}>
          <form className={css.formWrap} method="POST" onSubmit={sendSingUpFrom} >
         
                  <div className={css.formTopWrap}>

                    <FormElement label='Username'
                      type='text'
                      err={formErrors.userName}
                      placeholer='John23'
                      icon = 'person'
                      name = 'userName'
                      value={formData.userName}
                      onChange={handleInputChange} />

                    <FormElement label='Email'
                      err={formErrors.email}
                      type='email'
                      placeholer='Example123@domain.com'
                      icon = 'mail-outline'
                      name = 'email'
                      value={formData.email}
                      onChange={handleInputChange} />

                  </div>


                  <div className={css.formbtmWrap}>
                    <FormElement label='Password'
                      err={formErrors.password}
                      type='password'
                      placeholer='*******'
                      icon = 'lock-closed-outline'
                      name = 'password'
                      value={formData.password}
                      onChange={handleInputChange} />

                    <FormElement label='Confirm Password'
                      type='password'
                      err={formErrors.confirmPassword}
                      placeholer='*******'
                      icon = 'lock-closed-outline'
                      name = 'confirmPassword'
                      value={formData.confirmPassword}
                      onChange={handleInputChange} />
          
                  </div>
                  <div className={css.formSubWrap}>
                    <button className = {css.formSubmitBtn} type='submit' > Join Now </button>
                  </div>
            </form>
      </div>

          <p className={css.signInlink}>
              Already have an account ? <Link to={'/signin'}>Sign in</Link>
          </p>
    </div>
  )
}

export default Signup;