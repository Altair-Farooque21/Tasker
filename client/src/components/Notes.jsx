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
  }
  return (
    <div className={css.notesContainer}>
       <div className={css.notesWrapper}>
            {/* this is the  container grid for tasks */}
                <NotesCard mode="view" uid = "1231" handleClick = {handleCardClick} />
                <NotesCard mode="view" uid = "1234"  handleClick = {handleCardClick}/>
                <NotesCard mode="view" uid = "1831"  handleClick = {handleCardClick}/>
                <NotesCard mode="view" uid = "2331"  handleClick = {handleCardClick}/>
                <NotesCard mode="view" uid = "13431" handleClick = {handleCardClick} />
                <NotesCard mode="view" uid = "1234231"  handleClick = {handleCardClick}/>
                <NotesCard mode="view" uid = "123423431"  handleClick = {handleCardClick}/>
                <NotesCard mode="view" uid = "2342431" handleClick = {handleCardClick} />
                <NotesCard mode="view" uid = "42341" handleClick = {handleCardClick} />
                <NotesCard mode="view" uid = "98234931" handleClick = {handleCardClick} />
                <NotesCard mode="view" uid = "234731" handleClick = {handleCardClick} />
                <NotesCard mode="view" uid = "093421"  handleClick = {handleCardClick}/>
                <NotesCard mode="view" uid = "34241"  handleClick = {handleCardClick}/>
                <NotesCard mode="view" uid = "2341"  handleClick = {handleCardClick}/>
                <NotesCard mode="view" uid = "431"  handleClick = {handleCardClick}/>
                <NotesCard mode="view" uid = "3431"  handleClick = {handleCardClick}/>
                <NotesCard mode="view" uid = "84731"  handleClick = {handleCardClick}/>
       </div>
      
       <img onClick ={handleAddNote} className={css.AddFAB} src={addFab} alt="" width={56} color='white'/>

       <div className={`${css.addNotesComponent} ${addNote ? css.show : ''} ${!cardClose ? css.close : ''}  `}>
             <AddNotes handleClose={handleCloseBtn} uid = {cardId} />
       </div>
    </div>
  )
}

export default Notes;