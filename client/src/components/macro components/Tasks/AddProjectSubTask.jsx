import React from 'react';
import css from "../../../styles/Tasks/AddProjectSubTask.module.css";

function AddProjectSubTask() {
  return (
    <div className={css.container}>
        <input className={css.checkBox} type="checkbox" name="subtask1" id="1" />
        <p className={css.title}> Nav bar design</p>
        <p className={css.deadline}> 25 / 05 </p>
    </div>
  )
}

export default AddProjectSubTask;