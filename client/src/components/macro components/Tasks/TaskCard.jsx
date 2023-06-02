import React, { useState } from 'react';
import css from '../../../styles/Tasks/TaskCard.module.css';

import person1 from "../../../assets/person1.jpg";
import person2 from "../../../assets/person2.jpg";
import person3 from "../../../assets/person3.jpg";
import dotmenu from "../../../assets/dotmenu.png";
import edit from "../../../assets/editing.png";
import Delete from "../../../assets/delete.png";

function TaskCard({openProject,openDeleteOverlay ,openEditOverlay,pid}) {
   const [showDotMenu,setshowDotMenu] = useState(false);
   const [closeDotMenu,setCloseDotMenu] = useState(false);

   const handledotmenu = () =>{
      // binary click , you cliick same button to open and close the
      //  the menu or you can implement seperate button
      setCloseDotMenu(!closeDotMenu);
      setshowDotMenu(!showDotMenu);
   }

  return (
    <div className={css.taskCardWrapper}>
        <p className={css.taskTitle}>
            Website design
        </p>
        <div className={css.taskContainer}  onClick={openProject}>
            <p className={css.taskDescp}>
                    The design of the task manage-ment website for the Altair Company , this tool must be implement in the view of developer , where 
                    they wanna save thier time managing their projects .
            </p>
            <div className={css.taskMetadata}>
                 <p className={css.taskPriorityKey}>
                    Priority
                 </p>
                 <p className={css.taskPriorityValue}>
                    High
                 </p>
                 <p className={css.taskDue}>
                    Due
                 </p>
                 <p className={css.taskDueDate}>
                    7 / 05
                 </p>
                 <p className={css.taskTeam}>
                    Team
                 </p>
                 <div className={css.taskTeamPf}>
                      <img src={person1} alt="" width={24} height={24}/>
                      <img src={person2} alt="" width={24} height={24}/>
                      <img src={person3} alt="" width={24} height={24}/>
                      <p className={css.taskTeamCnt}> +3 </p>
                 </div>
            </div>
        </div>
        <img className={css.cardEditBtn} onClick={handledotmenu} src={dotmenu} alt="" width={26}/>
        <div className={`${css.ddMenu} ${showDotMenu ? css.show : ''} ${!closeDotMenu ? css.close : ''}`}>
            <button className={css.editBtn} onClick={openEditOverlay}>
                  <img src={edit} alt="" width={18}/> Edit
            </button>
            <button className= {css.deletebtn} onClick = {openDeleteOverlay} >
                  <img src={Delete} alt="" width={18}/> Delete
            </button>
        </div>
    </div>
  )
}

export default TaskCard;