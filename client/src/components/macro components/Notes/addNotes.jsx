import React, { useEffect, useState } from 'react';
import css from "../../../styles/Notes/addNotes.module.css";
import deleteIcon from "../../../assets/delete.png";
import closeIcon from "../../../assets/close.png";
import axios from 'axios';
import { getCreateDate } from '../../../utils/notesUtils';

function addNotes({handleClose,noteID,onAddNote,modeType}) {
   // getting and setting input values
   const [noteData,setNoteData] = useState({ title : '',note : ''});
   const [updateData,setUpdateData] = useState({ title : '',note : ''});
   const userID = sessionStorage.getItem("userID");
   const [editMode,setEditMode] = useState('')
   const colorCodes = ["#ff8989", // red
                       "rgb(255, 186, 59)",  // Orange
   "rgb(249, 249, 89)",  // yellow
   "rgb(158, 255, 158)", // green
   "rgb(142, 243, 243)", // teal
   "rgb(170, 231, 255)", // sky blue
   "rgb(185, 195, 255)", // blue
   "#cda5ff",            // purple
   "rgb(255, 208, 216)" ,// pink
  ]

  const getRandomColor = ()  => {
    const randomIndex = Math.floor(Math.random() * colorCodes.length);
    return colorCodes[randomIndex];
  }

  // for create action handler
   const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value; // corrected typo
    setNoteData({ ...noteData, [name]: value });
  };

  // for update action handler
  const handleUpdateChange = (e) => {
    let name = e.target.name;
    let value = e.target.value; // corrected typo
    setUpdateData({ ...updateData, [name]: value });
  };

  const resetFrom = () =>{
    setNoteData({ title : '',note : ''})
  }

  const ActionHandleClose = () =>{
        handleOnDiscard()
        resetFrom()
        handleClose()
  }
  const handleEditButton = () =>{
        setEditMode("Update");
  }

  const handleOnDiscard = () =>{
        setEditMode("");
  }
  // backend Actions

  const AxiosCreateNewEntry = async () =>{
    // creates note in the database
    const Data = {
        userID: userID,
        title: noteData.title,
        notes: noteData.note,
        colorCode: getRandomColor(),
        creatDate: getCreateDate(),
    }
    console.log(Data);
    try {
        const res = await axios.post('/notes/',Data,{
            headers: {
                'Content-Type': 'application/json'
              }
          });
        // console.log(res);
        onAddNote()
        handleClose()
    } catch (error) {
        console.error(error);
    }

  }

  const AxiosGetNoteByID = async () =>{
       try {
          const res = await axios.get(`/notes/Note/${noteID}`)
          // console.log(res.data)
          setUpdateData({ title : res.data.title,note : res.data.notes})
       } catch (error) {
         console.log(error);
       }
  }


  const AxiosUpdateEntry = async () =>{
    // updates note in the database
    const dataUpdate = {
      title : updateData.title,
      notes : updateData.note
     }
    try {
      const res = await axios.put(`/notes/${noteID}`,dataUpdate,{
          headers: {
              'Content-Type': 'application/json'
            }
        });
      // console.log(res);
      onAddNote()
      handleOnDiscard()
      handleClose()
  } catch (error) {
      console.error(error);
  }
  }

  const AxiosDeleteEntry = async () =>{
    try {
      const res = await axios.delete(`/notes/${noteID}`)
      // console.log(res);
      onAddNote()
      handleClose()
     } catch (error) {
      console.error(error);
      }

  }
  
  useEffect(()=>{
    if(modeType === "View"){
    AxiosGetNoteByID()
    }
    if(editMode === 'Update'){
      AxiosGetNoteByID()
    }
    // console.log("render")
  },[modeType,
    editMode,
    noteID])
  
  return (
    <div className={css.Container}>
        <div className={css.titleWrapper}>
            {modeType === "View" && editMode === '' ? 
            
            <p>{updateData && updateData.title}</p> :

            <input value = {editMode === 'Update' ?  updateData.title : noteData.title }
                   name="title" 
                   type="text"
                   placeholder='add title'
                   onChange={ editMode === 'Update' ? handleUpdateChange : handleInputChange}/>
                  }
        </div>
        <div className={css.notesWrapper}>
            {modeType === "View" && editMode === ''? 

            <p>{updateData && updateData.note}</p> :

            <textarea  value = {editMode === 'Update' ? updateData.note : noteData.note}
                       type="text" 
                       name="note" 
                       className={css.notesInput} 
                       placeholder='add your notes here' 
                       onChange={ editMode === 'Update' ? handleUpdateChange : handleInputChange}/>
                }
        </div>
        <div className={css.actionBtns}>
            { editMode === '' ?

              <button className={css.deleteBtn} onClick={modeType === 'Create' ? null : AxiosDeleteEntry}>
                    <img src={deleteIcon} alt="" width={20} /> Delete 
              </button> :

              <button className={css.deleteBtn} onClick={handleOnDiscard}>
                   Discard
              </button>

              }
              { editMode === '' ?
            <button className={css.createBtn}  onClick={ modeType === 'Create' ? AxiosCreateNewEntry : handleEditButton}> 
                    {modeType === 'Create' ? "Add" : "Edit"}
            </button> : 
            <button className={css.createBtn} onClick={AxiosUpdateEntry}>
                  Save Changes
            </button> 
              }

        </div>
        <img className={css.closeBtn} src={closeIcon} alt="" width={24} onClick={ActionHandleClose}/>
    </div>
  )
}

export default addNotes;