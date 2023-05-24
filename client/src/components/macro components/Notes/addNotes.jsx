import React, { useEffect, useState } from 'react';
import css from "../../../styles/Notes/addNotes.module.css";
import deleteIcon from "../../../assets/delete.png";
import closeIcon from "../../../assets/close.png";
import axios from 'axios';

function addNotes({handleClose,uid}) {
   // getting and setting input values
   const [noteData,setNoteData] = useState({ title : '',note : '' });
   const [mode,setmode] = useState('');
   const cardID = uid;

   useEffect(()=>{
        if(cardID === ''){
        setmode('Create');
        }
        else{
        setmode('Update');
        }
   },[cardID]);
   

   const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value; // corrected typo
    setNoteData({ ...noteData, [name]: value });
  };
  
  return (
    <div className={css.Container}>
        <p className={css.uid}>{uid}</p>
        <div className={css.titleWrapper}>
            <p className={css.title}>
                Title
            </p>
            <input value = {noteData.title} name="title" type="text" placeholder='add title' onChange={handleInputChange}/>
        </div>
        <div className={css.notesWrapper}>
            <textarea  value = {noteData.note} type="text" name="note" className={css.notesInput} placeholder='add your notes here' onChange={handleInputChange}/>
        </div>
        <div className={css.actionBtns}>
            <button className={css.deleteBtn}><img src={deleteIcon} alt="" width={20} /> Delete </button>
            <button className={css.createBtn}> {mode} </button>
        </div>
        <img className={css.closeBtn} src={closeIcon} alt="" width={24} onClick={handleClose}/>
    </div>
  )
}

export default addNotes;