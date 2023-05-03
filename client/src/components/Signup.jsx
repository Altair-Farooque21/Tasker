import React ,{useState} from 'react';

import FormElement from './common/FromElement';
import css from "./Signup.module.css";

function Signup() {

  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword :''
  });

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
          <form classname={css.formWrap} onSubmit={handleSubmit} >
         
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
                    <button className = {css.formSubmitBtn}type='submit'> Join Now </button>
                  </div>
            </form>
      </div>

          <p className={css.signInlink}>
              Already have an account ? <span>Sign in</span>
          </p>
    </div>
  )
}

export default Signup;