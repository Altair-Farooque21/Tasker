import React from 'react';
import css from "../styles/Tasks.module.css";

function Tasks() {
  return (
    <div className={css.tasksContainer}>
       <div className={css.tasksWrapper}>
            {/* this is the  container grid for tasks */}
            Tasks
                <ion-icon className={css.fabBtn} name="add-outline"></ion-icon>
            
       </div>
    </div>
  )
}

export default Tasks;