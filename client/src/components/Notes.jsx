import React from 'react';
import css from "../styles/Notes.module.css";

function Notes() {
  return (
    <div className={css.notesContainer}>
       <div className={css.notesWrapper}>
            {/* this is the  container grid for tasks */}
                Notes
                <ion-icon className={css.fabBtn} name="add-outline"></ion-icon>
            
       </div>
    </div>
  )
}

export default Notes;