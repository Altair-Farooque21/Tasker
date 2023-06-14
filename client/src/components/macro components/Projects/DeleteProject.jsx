import React from 'react';
import css from "../../../styles/Projects/DeleteProject.module.css";
import deleteBin from "../../../assets/animations/bin.gif";

import axios from 'axios';

function DeleteProject({actionCancel , onDeleteRefresh, pid}) {

  const AxiosDeleteProjectEntry = async ()=>{
        try {
          const res = await axios.delete(`/projects/${pid}`)
          console.log(res)
          onDeleteRefresh()
          actionCancel()
        } catch (error) {
          console.log(error)
        }
  }

  return (
    <div className={css.container}>
        <img src={deleteBin} alt="" width={80}/>
        <p className={css.title}>
            Are you sure you want to delete this project
        </p>
        <div className={css.actionBtns}>
             <button className={css.cancelBtn} onClick={actionCancel}>Cancel</button>
             <button className={css.deleteBtn} onClick={AxiosDeleteProjectEntry}>Delete</button>
        </div>
    </div>
  )
}

export default DeleteProject;