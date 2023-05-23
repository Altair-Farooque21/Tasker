import React, { useState } from 'react';
import css from "../../../styles/Notes/addNotes.module.css";
import deleteIcon from "../../../assets/delete.png";
import closeIcon from "../../../assets/close.png";

function addNotes({handleClose,uid}) {
   const [title,settitle] = useState('');
   const [note,setnote] = useState('');
  return (
    <div className={css.Container}>
        <p className={css.uid}>{uid}</p>
        <div className={css.titleWrapper}>
            <p className={css.title}>
                Title
            </p>
            <input value = {title} type="text" placeholder='add title' />
        </div>
        <div className={css.notesWrapper}>
            <textarea value = {note} type="text" className={css.notesInput} placeholder='add your notes here'/>
        </div>
        <div className={css.actionBtns}>
            <button className={css.deleteBtn}><img src={deleteIcon} alt="" width={20} /> Delete </button>
            <button className={css.createBtn}> Create </button>
        </div>
        <img className={css.closeBtn} src={closeIcon} alt="" width={24} onClick={handleClose}/>
    </div>
  )
}

export default addNotes;