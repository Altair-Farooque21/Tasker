import React from 'react';
import css from "../../../styles/Tasks/DeleteProject.module.css";
import deleteBin from "../../../assets/animations/bin.gif"

function DeleteProject({actionCancel}) {
  return (
    <div className={css.container}>
        <img src={deleteBin} alt="" width={80}/>
        <p className={css.title}>
            Are you sure you want to delete this project
        </p>
        <div className={css.actionBtns}>
             <button className={css.cancelBtn} onClick={actionCancel}>Cancel</button>
             <button className={css.deleteBtn}>Delete</button>
        </div>
    </div>
  )
}

export default DeleteProject;