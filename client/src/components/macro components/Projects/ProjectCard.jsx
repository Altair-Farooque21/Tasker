import React, { useState } from 'react';
import css from '../../../styles/Projects/ProjectCard.module.css';

import person1 from "../../../assets/person1.jpg";
import person2 from "../../../assets/person2.jpg";
import person3 from "../../../assets/person3.jpg";
import dotmenu from "../../../assets/dotmenu.png";
import edit from "../../../assets/editing.png";
import Delete from "../../../assets/delete.png";

function ProjectCard({openProject,
                  openDeleteOverlay ,
                  openEditOverlay,
                  ProjectID,
                  Title,
                  Description,
                  DueDate,
                  Priority,
                  }) {
   const [showDotMenu,setshowDotMenu] = useState(false);
   const [closeDotMenu,setCloseDotMenu] = useState(false);

   const handledotmenu = () =>{
      // binary click , you cliick same button to open and close the
      //  the menu or you can implement seperate button
      setCloseDotMenu(!closeDotMenu);
      setshowDotMenu(!showDotMenu);
   }

   const getDueFormat = (DateStr) =>{
      const date = new Date(DateStr);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      return `${day} / ${month}`;
   }

  return (
    <div className={css.taskCardWrapper}>
        <p className={css.taskTitle}>
            {Title}
        </p>
        <div className={css.taskContainer}  onClick={(e) => {openProject(ProjectID)}}>
            <p className={css.taskDescp}>
                    {Description}
            </p>
            <div className={css.taskMetadata}>
                 <p className={css.taskPriorityKey}>
                    Priority
                 </p>
                 <p className={css.taskPriorityValue}>
                    {Priority}
                 </p>
                 <p className={css.taskDue}>
                    Due
                 </p>
                 <p className={css.taskDueDate}>
                    {getDueFormat(DueDate)}
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
        {/* action menu */}
        <img className={css.cardEditBtn} onClick={handledotmenu} src={dotmenu} alt="" width={26}/>
        <div className={`${css.ddMenu} ${showDotMenu ? css.show : ''} ${!closeDotMenu ? css.close : ''}`}>
            <button className={css.editBtn} onClick={ (e) => {openEditOverlay(ProjectID)}}>
                  <img src={edit} alt="" width={18}/> Edit
            </button>
            <button className= {css.deletebtn} onClick = {(e) => {openDeleteOverlay(ProjectID)}} >
                  <img src={Delete} alt="" width={18}/> Delete
            </button>
        </div>
    </div>
  )
}

export default ProjectCard;