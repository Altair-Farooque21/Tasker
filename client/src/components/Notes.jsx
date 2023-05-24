import React, { useState } from 'react';
import css from "../styles/Notes.module.css";
import NotesCard from './macro components/Notes/NotesCard';
import addFab from "../assets/plus.png";
import AddNotes from './macro components/Notes/addNotes';
import { useEffect } from 'react';

function Notes() {
  const [cardId , setcardId] = useState('');
  const [cardClose ,setcardClose] = useState(false);
  const [addNote ,setaddNote] = useState(false);

  const handleCardClick = (id) => {
    setcardId(id);
    setcardClose(!cardClose);
    setaddNote(!addNote);
    console.log(cardId);
  };

  const handleCloseBtn = ()=>{
        setcardClose(!cardClose);
  }

  const handleAddNote = () =>{
    // to remove close property
    setcardId('');
    setcardClose(!cardClose);
    setaddNote(!addNote);
    console.log(addNote);
    let date = Date().split(' ');
    console.log(date);
  }
  return (
    <div className={css.notesContainer}>
       <div className={css.notesWrapper}>
            {/* this is the  container grid for tasks */}
            Get notes from the server!
            <p> {sessionStorage.getItem('userID')}</p>
       </div>
      
       <img onClick ={handleAddNote} className={css.AddFAB} src={addFab} alt="" width={56} color='white'/>

       <div className={`${css.addNotesComponent} ${addNote ? css.show : ''} ${!cardClose ? css.close : ''}  `}>
             <AddNotes handleClose={handleCloseBtn} uid = {cardId} />
       </div>
    </div>
  )
}

export default Notes;