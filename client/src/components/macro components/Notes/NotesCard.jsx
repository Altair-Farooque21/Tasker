import React, { useEffect, useRef } from 'react';
import css from "../../../styles/Notes/NotesCard.module.css";

function NotesCard({cid,color,title,note,cDate,handleClick}) {
  const containerRef = useRef(null);
  const colorCode = color;

  useEffect(()=>{
    containerRef.current.style.backgroundColor = colorCode;
  },[colorCode]);

  return (
    <div className={css.noteCardContainer} ref={containerRef} style={{ isolation: 'isolate' }} onClick={() => handleClick(cid)}>
         <p className={css.title}>
             Web design tips
         </p>
         <p className={css.noteText}>
         When working with React, it's important to keep your components small and reusable. You should use state and props effectively to manage data and communicate between components. It's also important to keep your code organized and properly formatted for readability.
         </p>
         <div className={css.editWrap}>
            <p className={css.createDate}> 05 fri , 2023 </p>
         </div>
    </div>
  )
}

export default NotesCard;