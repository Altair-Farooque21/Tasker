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
  const [Resdata , seRestData] = useState(null);
  const [modeType,setModeType] = useState('')

  const handleAddNote = () =>{
    setModeType("Create")
    setcardClose(!cardClose);
    setaddNote(!addNote);
  }


  const handleCardClick = (id) => {
    setModeType("View");
    setcardId(id)  // this sets card id from the reference card which was clicked
    setcardClose(!cardClose); // this one toggles close --> ' '
    setaddNote(!addNote);  // this one toggles ' ' --> show ( Optional but efficient)
  };

  const handleCloseBtn = ()=>{
        setcardClose(!cardClose);
  }

  const AxiosGetNotesData = async () =>{
    try {
      const res = await axios.get(`/notes/${userID}`)
      seRestData(res.data);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
    useEffect(()=>{
      AxiosGetNotesData()
  },[]);


  return (
    <div className={css.notesContainer}>

       {/* Notes container */}
       <div className={css.notesWrapper}>
            { Resdata && Resdata.map((note) =>{
              return <NotesCard noteID={note._id} 
                                color = {note.colorCode} 
                                title = {note.title} 
                                note = {note.notes} 
                                cDate = {note.creatDate}
                                handleClick = {handleCardClick}/>
            })
            }
       </div>

       {/* {Add / create note button} */}
       {/* FAB tests passed ✅ */}
       <img onClick ={handleAddNote} className={css.AddFAB} src={addFab} alt="" width={56} color='white'/>

       {/* Add note overlay pop-up container */}
       {/* Overlayy tests passed ✅ */}
       <div className={`${css.addNotesComponent} ${addNote ? css.show : ''} ${!cardClose ? css.close : ''}  `}>
             <AddNotes handleClose={handleCloseBtn} 
                       onAddNote  = {AxiosGetNotesData}
                       modeType = {modeType}
                       noteID ={cardId}/>
       </div>
    </div>
  )
}

export default Notes;