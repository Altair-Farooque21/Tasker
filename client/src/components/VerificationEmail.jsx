import React, { useState,useRef } from 'react';
import css from "../styles/VerificationEmail.module.css";
import axios from 'axios';

function VerificationEmail() {

  const [formCode ,setFormCode] = useState(['','','','','','']);
  // asssigning refs for move next
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const handleDigitChange = (index, value) => {
    const newDigits = [...formCode];
    newDigits[index] = value;
    setFormCode(newDigits);
    const nextIndex = index + 1;

    if (value.length >= 1 && nextIndex < inputRefs.length) {
      inputRefs[nextIndex].current.focus(); // Move to the next input field
    }
  };
  
  const checkVerificationCode = async (event)=>{
    event.preventDefault();
    try {
      const code = formCode.join('');
      console.log({code:code});
      // const response = await axios.post('/verification/verify', { code : code });
      // handle response from server
    } catch (error) {
      // handle error from server
      console.error(error);
    }
  }

  const resendVerificationCode = async (event)=>{
    event.preventDefault();
    try{
      // const response = await axios.get('/verification/resend',{msg:'resend'});
      // handle reponse from server
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
            <p className={css.error}></p>
            <button className={css.verifyBtn} type='submit'>Verify</button>
        </form>
      <p className={css.resendCode} onClick={resendVerificationCode}>Resend code</p>


    </div>
  )
}

export default VerificationEmail;