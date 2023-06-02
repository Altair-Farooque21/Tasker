import React, { useState } from 'react';
import css from "../styles/Notes.module.css";
import NotesCard from './macro components/Notes/NotesCard';
import addFab from "../assets/plus.png";
import AddNotes from './macro components/Notes/addNotes';
import axios from 'axios';
import { useEffect } from 'react';

function Notes() {
  const [cardId , setcardId] = useState('');
  const [cardClose ,setcardClose] = useState(false);
  const [addNote ,setaddNote] = useState(false);
  const userID = sessionStorage.getItem('userID');
  const [noteCount,setnoteCount] = useState(0);
  const [data , setData] = useState(null);

  // useEffect(()=>{
  //   const fetchData = async () =>{
  //     console.log(userID);
  //     try {
  //       const res = await axios.get('/notes/',{userID:userID},{
  //         headers: {
  //             'Content-Type': 'application/json'
  //           }
  //       });
  //       setData(res.data);
  //       console.log(res);
        
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchData();
  //   console.log(data);
  // },[]);

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
  }
  return (
    <div className={css.notesContainer}>
       <div className={css.notesWrapper}>
       <NotesCard />
       </div>
      
       <img onClick ={handleAddNote} className={css.AddFAB} src={addFab} alt="" width={56} color='white'/>

       <div className={`${css.addNotesComponent} ${addNote ? css.show : ''} ${!cardClose ? css.close : ''}  `}>
             <AddNotes handleClose={handleCloseBtn} uid = {userID} cid ={cardId}/>
       </div>
    </div>
  )
}

export default Notes;