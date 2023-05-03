import React from 'react';
import css from "./FromElement.module.css";

const FormElement = ({ label,icon,err,type,placeholer, name, value, onChange }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(name, value);
  };

  return (
    <div className={css.mainContainer}>
      <p className={css.Label}> {label} </p>
      <div className={css.inputWrapper}>
            <input type={type} id={name} name={name} placeholder={placeholer} value={value} onChange={handleChange} />
            <ion-icon name={icon}></ion-icon>
      </div>
      <p className={css.error}>
         {err}
      </p>
    </div>
  );
};

export default FormElement;
