import React ,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

  // for navigating through routes
  const navigate = useNavigate()

  // for handling form elements 
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // this will cache token for future requests
  // then navigates to email Verification page
  const onUserRegistration = (token) => {
    sessionStorage.setItem('authToken',token);
    navigate('/verification',{ replace:true });
  }

  // this will send form data to backend 
  // if user didn't exists and new user will registered 
  // then token will be returned as response from server or backend 
  const registerSignupEntry = async (event) => {
    // prevents from refreshing on form submit
    event.preventDefault();
    console.log(formData);
    const Data = {
      username: formData.userName,
      email: formData.email,
      password: formData.password,
    }
    try{
       // making a post request in axios to server
        const response = await axios.post('/users/signup',Data,{
                headers: {
                    'Content-Type': 'application/json'
                  }
              });
        // getting reponse from server both status and data
        console.log(response.data); // Handle the response from the server
        const jwtToken = response.data.token;

        // call for redirect to verification page
        onUserRegistration(jwtToken);
        }
    catch (error) {// catching errors if request failed 
        console.error(error);
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
          <form classname={css.formWrap} onSubmit={registerSignupEntry} >
         
                  <div className={css.formTopWrap}>

                    <FormElement label='Username'
                      type='text'
                      err=''
                      placeholer='John23'
                      icon = 'person'
                      name = 'userName'
                      value={formData.userName}
                      onChange={handleInputChange} />

                    <FormElement label='Email'
                      err=''
                      type='email'
                      placeholer='Example123@domain.com'
                      icon = 'mail-outline'
                      name = 'email'
                      value={formData.email}
                      onChange={handleInputChange} />
                  </div>


                  <div className={css.formbtmWrap}>
                    <FormElement label='Password'
                      err=''
                      type='password'
                      placeholer='*******'
                      icon = 'lock-closed-outline'
                      name = 'password'
                      value={formData.password}
                      onChange={handleInputChange} />

                    <FormElement label='Confirm Password'
                      type='password'
                      err=''
                      placeholer='*******'
                      icon = 'lock-closed-outline'
                      name = 'confirmPassword'
                      value={formData.confirmPassword}
                      onChange={handleInputChange} />
          
                  </div>
                  <div className={css.formSubWrap}>
                    <button className = {css.formSubmitBtn} type='submit'> Join Now </button>
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