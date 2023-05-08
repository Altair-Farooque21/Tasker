import React from 'react';
import css from "../../../styles/Tasks/AddTaskOverlay.module.css";
import AddTaskBtn from '../../micro components/AddTaskBtn';


function AddTaskOverlay({onClose}) {
  return (
    <div className={css.addTapWrapper}>
        <div className={css.leftContainer}>

          <div className={css.titleWrap}>
             <p className={css.title}>
                 Title
             </p>
             <input type="text" placeholder='Website Design' className={css.titleInput} />
      
          </div>

          <div className={css.descWrap}>
             <p className={css.desc}>
                 Description
             </p>
             <textarea type="textarea" className={css.descInput} />
      
          </div>

          <div className={css.subWrap}>
             <p className={css.subTask}>
                 Sub-task
             </p>
             <AddTaskBtn name="Tap to add" tip= "Its better to break down your task into sub -tasks for better tracking  of your progress"/>
          </div>

      
        </div>

        <div className={css.rightContainer}>
          
          <div className={css.teamsWrap}>
            <p className={css.teams}> Teams </p>
            <AddTaskBtn name="Add member" tip= "Get things done faster by collabrating with others , add them now"/>
          </div>

          <div className={css.dueWrapper}>
             <p className={css.due}>Deadline</p>
             <AddTaskBtn name="Add deadline" tip= "Deadlines will really motivate you to get things done and get you organised ."/>
          </div>

          <div className={css.priorWrap}>
            <p className={css.priority}>Priority <span>( Optional )</span></p>
            <div className={css.priorBtnWrap}>
               <button>High</button>
               <p> Customize your priority for most important tasks </p>
            </div>
          </div>

        </div>

        <div className={css.submitWrap}>
           <button> Add </button>
        </div>
        <div className={css.closeOverlay} onClick={onClose}>
              <ion-icon name="close-outline"></ion-icon>
        </div>
    </div>
  )
}

export default AddTaskOverlay;