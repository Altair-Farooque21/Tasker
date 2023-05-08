import React from 'react';
import css from "./AddTaskBtn.module.css";

function AddTaskBtn(props) {
  return (
    <div className={css.container}>
        <button> {props.name} </button>
        <p> {props.tip} </p>
    </div>
  )
}

export default AddTaskBtn;