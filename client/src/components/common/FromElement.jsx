import React, { useEffect, useRef, useState } from 'react';
import css from "./FromElement.module.css";
import emailIcon from "../../assets/mail.png";
import userIcon from "../../assets/id-card.png";
import showIcon from "../../assets/show.png";
import hideIcon from "../../assets/hide.png";

const FormElement = ({ label,icon,err,type,placeholer, name, value, onChange }) => {
  const inputRef = useRef(null);
  const [toggleIcon,settoggleIcon] = useState(null);
  const [isPassword,setisPassword] = useState(false);

  useEffect(()=>{
    if(name==='userName'){
      settoggleIcon(userIcon);
    }
    else if(name==='email'){
      settoggleIcon(emailIcon);
    }
    else if(name==='password' || name==='confirmPassword'){
      setisPassword(!isPassword);
      settoggleIcon(hideIcon);
    }
  },[]);

  const toggleView = ()=>{
        let curentType = inputRef.current.type
        inputRef.current.type = inputRef.current.type === "password" ? "text" : "password";
        if(curentType === 'text'){
          settoggleIcon(hideIcon);
        }
        else{
          settoggleIcon(showIcon)
        }
  }
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(name, value);
  };

  return (
    <div className={css.mainContainer}>
      <p className={css.Label}> {label} </p>
      <div className={css.inputWrapper}>
            {isPassword ? 
             <input type={type} id={name} ref={inputRef} name={name} placeholder={placeholer} value={value} onChange={handleChange} /> :
             <input type={type} id={name} name={name} placeholder={placeholer} value={value} onChange={handleChange} /> }
           
            <img className = {css.inputIcon} src={toggleIcon} alt="" width={22} onClick={isPassword ? toggleView : ''}/>
      </div>
      <p className={css.error}>
         {err}
      </p>
    </div>
  );
};

export default FormElement;
