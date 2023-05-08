import React from 'react';
import css from "../../../styles/Notes/NotesDashboard.module.css";

function NotesDashboard() {
  return (
    <div className={css.ndWrapper}>
        <p className={css.ndTitle}> Design tips</p>
        <p className={css.ndDesc}>
          these are the top 10 design tips every designer should know
        </p>
    </div>
  )
}

export default NotesDashboard;