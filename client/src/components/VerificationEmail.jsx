import React, { useState,useRef } from 'react';
import css from "../styles/VerificationEmail.module.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function VerificationEmail() {

  const [formCode ,setFormCode] = useState(['','','','','','']);
  // asssigning refs for move next
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [Error,setError ] = useState('');

   // for navigating through routes
   const navigate = useNavigate();

  const handleDigitChange = (index, value) => {
    const newDigits = [...formCode];
    newDigits[index] = value;
    setFormCode(newDigits);
    const nextIndex = index + 1;

    if (value.length >= 1 && nextIndex < inputRefs.length) {
      inputRefs[nextIndex].current.focus(); // Move to the next input field
    }
  };

  const clearInputFields = () => {
    const clearedDigits = formCode.map(() => '');
    setFormCode(clearedDigits);
  
    for (let index = 0; index < inputRefs.length; index++) {
      inputRefs[index].current.value = '';
    }
  };
  
  const checkVerificationCode = async (event)=>{
    event.preventDefault();
    try {
      const code = formCode.join('');
      // console.log({code:code});
      const response = await axios.post('/users/code-verfication', 
                              { email : sessionStorage.getItem('email'),userCode : code },{
                                headers: {
                                            'Content-Type': 'application/json'
                                         }
                                        });
      // handle response from server
      navigate('/dashboard',{ replace:true });
    } catch (error) {
      // handle error from server
      setError('Invalid code');
      clearInputFields()
      console.error(error);
    }
  }

  const resendVerificationCode = async (event)=>{
    event.preventDefault();
    try{
      const response = await axios.post('/users/resend-code',{ email : sessionStorage.getItem('email') },{
        headers: {
                    'Content-Type': 'application/json'
                 }
                });
      clearInputFields();
      setError('');
    }
    catch (error){
      console.error(error);
    }
  }

  return (
    <div className={css.verifyContainer}>
      <p className={css.title}>
        Verify your email address to get started
      </p>
      <p className={css.desc}>
        Please enter the OTP code sent to example123@gmail.com to complete your email verification and unlock all the features of our task management app. Keep your account safe and secure with email verification and two-factor authentication. Thank you for choosing our app!
      </p>

      <form className={css.formConatiner} onSubmit={checkVerificationCode}>
            <div className={css.formCodeWrap}>
            {formCode.map((digit, index) => (
                      <input
                        key={index}
                        ref={inputRefs[index]}
                        type="text"
                        value={digit}
                        onChange={(event) => handleDigitChange(index, event.target.value)}
                        maxLength={1}
                      />
              ))}
              </div>
            <p className={css.error}>{Error}</p>
            <button className={css.verifyBtn} type='submit'>Verify</button>
        </form>
      <p className={css.resendCode} onClick={resendVerificationCode}>Resend code</p>


    </div>
  )
}

export default VerificationEmail;