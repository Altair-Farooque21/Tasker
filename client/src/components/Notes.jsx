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

  const handleAddNote = () =>{
    setcardId('');
    setcardClose(!cardClose);
    setaddNote(!addNote);
  }


  const handleCardClick = (id) => {
    setcardId(id)  // this sets card id from the reference card which was clicked
    setcardClose(!cardClose); // this one toggles close --> ' '
    setaddNote(!addNote);  // this one toggles ' ' --> show ( Optional but efficient)
    console.log(cardId)
  };

  const handleCloseBtn = ()=>{
        setcardClose(!cardClose);
  }

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


  return (
    <div className={css.notesContainer}>

       {/* Notes container */}
       <div className={css.notesWrapper}>
            <NotesCard cid={'3423'} handleClick = {handleCardClick}/>
       </div>

       {/* {Add / create note button} */}
       {/* FAB tests passed ✅ */}
       <img onClick ={handleAddNote} className={css.AddFAB} src={addFab} alt="" width={56} color='white'/>

       {/* Add note overlay pop-up container */}
       {/* Overlayy tests passed ✅ */}
       <div className={`${css.addNotesComponent} ${addNote ? css.show : ''} ${!cardClose ? css.close : ''}  `}>
             <AddNotes handleClose={handleCloseBtn} uid = {userID} cid ={cardId}/>
       </div>
    </div>
  )
}

export default Notes;