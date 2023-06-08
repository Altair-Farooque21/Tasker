import React, { useEffect, useRef } from 'react';
import css from "../../../styles/Notes/NotesCard.module.css";

function NotesCard({noteID,color,title,note,cDate,handleClick}) {
  const containerRef = useRef(null);
  const colorCode = color;

  useEffect(()=>{
    containerRef.current.style.backgroundColor = colorCode;
  },[colorCode]);

  return (
    <div className={css.noteCardContainer} ref={containerRef} style={{ isolation: 'isolate' }} onClick={() => handleClick(noteID)}>
         <p className={css.title}>
            {title}
         </p>
         <p className={css.noteText}>
            {note}
         </p>
         <div className={css.editWrap}>
            <p className={css.createDate}> {cDate} </p>
         </div>
    </div>
  )
}

export default NotesCard;