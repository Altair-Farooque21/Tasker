import React, { useEffect, useState } from 'react';
import css from "../../../styles/Notes/addNotes.module.css";
import deleteIcon from "../../../assets/delete.png";
import closeIcon from "../../../assets/close.png";
import axios from 'axios';
import { getCreateDate } from '../../../utils/notesUtils';

function addNotes({handleClose,uid,cid}) {
   // getting and setting input values
   const [noteData,setNoteData] = useState({ title : '',note : ''});
   const [mode,setmode] = useState('Create');
   const userID = uid;
   const color = "#a06cdf";

   useEffect(()=>{
        if(!(cid === '')){
        setmode('Update');
        }
        else{
          setmode("Create");
        }
   },[cid]);
   

   const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value; // corrected typo
    setNoteData({ ...noteData, [name]: value });
  };

  const createNote = async (e) =>{
    // creates note in the database
    e.preventDefault();
    const Data = {
        userID: userID,
        title: noteData.title,
        description:noteData.note,
        colorCode: color,
        creatDate: getCreateDate(),
    }
    console.log(Data);
    try {
        const res = await axios.post('/notes/',Data,{
            headers: {
                'Content-Type': 'application/json'
              }
          });
        console.log(res);
        
    } catch (error) {
        console.error(error);
    }

  }
  const updateNote = async (e) =>{
    // updates note in the database
    e.preventDefault();
  }

  const deleteNote = async (e) =>{
    e.preventDefault();

  }
  
  return (
    <div className={css.Container}>
      <p> {cid} </p>
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
            <button className={css.deleteBtn} onClick={deleteNote}><img src={deleteIcon} alt="" width={20} /> Delete </button>
            <button className={css.createBtn}  onClick={ mode === 'Create' ? createNote : updateNote}> {mode} </button>
        </div>
        <img className={css.closeBtn} src={closeIcon} alt="" width={24} onClick={handleClose}/>
    </div>
  )
}

export default addNotes;