import React from 'react';
import css from "../../../styles/Tasks/ProjectSubtaskFrom.module.css";
import closeIcon from "../../../assets/close.png";

function ProjectSubtaskFrom({closeForm}) {

  const handleForm = () =>{
        closeForm();
  }
  return (
        <div className={css.container}>
             <div className={css.titleWrapper}>
                <p>
                    Title
                </p>
                <input type="text" />
             </div>
             <div className={css.deadlineWrapper}>
                <p>
                    Deadline
                </p>
                <input type="date" name="" id="" />
             </div>
             <button className={css.AddBtn} onClick={handleForm}> Add </button>
             <img className = {css.closeOverlay} src={closeIcon} alt="" width={22}  onClick={closeForm}/>
        </div>
  )
}

export default ProjectSubtaskFrom;