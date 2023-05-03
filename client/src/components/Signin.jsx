import React,{useState} from 'react';
import css from "./Signin.module.css";
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

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
      };
      
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
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
                <form onSubmit={handleSubmit} className={css.form}>

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
                    <p> Don’t have an account ? <span>Create one</span></p>
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