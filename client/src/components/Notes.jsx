import React from 'react';
import css from "../styles/Notes.module.css";
import NotesCard from './macro components/Notes/NotesCard';

function Notes() {
  return (
    <div className={css.notesContainer}>
       <div className={css.notesWrapper}>
            {/* this is the  container grid for tasks */}
                <NotesCard />
                <NotesCard />
                <NotesCard />
                <NotesCard />
                <NotesCard />
                <NotesCard />
                <NotesCard />
                <NotesCard />
                <NotesCard />
                <NotesCard />
                <NotesCard />
                <NotesCard />
                <NotesCard />
            
       </div>
    </div>
  )
}

export default Notes;