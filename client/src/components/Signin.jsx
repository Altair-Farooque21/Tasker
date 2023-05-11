import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


import css from "../styles/Signin.module.css";
import signinImg from "../assets/SigninImg.png";
import FormElement from './common/FromElement';

import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";

import poly1 from "../assets/animations/signin/SigninPoly1.svg";
import poly2 from "../assets/animations/signin/SigninPoly2.svg";

function Signin() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
    // for navigating through routes
    const navigate = useNavigate();

    // for handling form elements 
    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
      };
    
    // this will cache token for future requests
    // than navigates to Dashboard
    const onLogin = (token) => {
        sessionStorage.setItem('authToken',token);
        navigate('/dashboard',{ replace:true });
    }
    
    // this will send form data to backend 
    // if user exists the token will be returned 
    // as response from server or backend 
    const userAuthentication = async (event) => {
        // prevents from refreshing the page on form submit
        event.preventDefault();
        console.log(formData);
        try{
            // making a post request in axios to server
            const response = await axios.post('/users/signin',formData,{
                    headers: {
                        'Content-Type': 'application/json'
                      }
                  });
            // getting reponse from server both status and data
            console.log(response.data); // logging response from the server
            const jwtToken = response.data.token;

            // call for redirect to main page
            onLogin(jwtToken);
            }
        catch (error) { // catching errors if request failed 
            console.error(error);
          }
      };
  
  return (
    <div className={css.mainContainer}>
        <div className={css.leftWrapper}>
            <p className={css.leftLegend}>
            Get things done efficiently with our task management website
            </p>
            <img className={css.leftImg} src={signinImg} alt=""  width={200} />
        </div>

        <div className={css.rightWrapper}>
            <p className={css.rightTitle}>
                <span>Welcome</span> Back!
            </p>
            <p className={css.rightSubt}>
                Sign In to Your Account
            </p>

            <div className={css.formWrapper}>
                <form onSubmit={userAuthentication} className={css.form}>

                    <FormElement label='Email'
                      err=''
                      type='email'
                      placeholer='Example123@domain.com'
                      icon = 'mail-outline'
                      name = 'email'
                      value={formData.email}
                      onChange={handleInputChange} />
                    
                    <FormElement label='Password'
                      err=''
                      type='password'
                      placeholer='*******'
                      icon = 'lock-closed-outline'
                      name = 'password'
                      value={formData.password}
                      onChange={handleInputChange} />

                    <div className={css.formUtils}>

                        <div className={css.rememberMeWrap}>
                            <input type="checkbox" />
                            <p>Remember me</p>
                        </div>

                        <p className={css.forgot}>
                            forgot password ?
                        </p>
                    </div>

                    <button className={css.submitBtn} type='submit'> Sign In </button>
                </form>
                <div className={css.createLink}>
                    <p> Don’t have an account ? <Link to = '/signup'>Create one</Link></p>
                </div>
                
            </div>
        </div>
        <div className={css.lastWrappper}>
            <div className={css.breakPoint}>
                <span></span>
                <p>or</p>
            </div>
            <div className={css.socialSSI}>
                <img src={Google} alt="Google" width={34}/>
                <img src={Facebook} alt="Facebook" width={38}/>
            </div>
        </div>

        <img className={css.signinPoly1} src={poly1} alt="" width={400}/>
        <img className={css.signinPoly2} src={poly2} alt="" width={400}/>
    </div>
  )
}

export default Signin