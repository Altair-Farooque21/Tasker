import React, { useEffect, useRef } from 'react';
import css from '../../../styles/Checklist/ChecklistCard.module.css';
import reminder from "../../../assets/reminder.png";
import bookmark from "../../../assets/bookmark.png";

function ChecklistCard({title,description,checkLists,dueDate,colorCode,createDate,taskID,cardClicked}){ 
  const containerRef = useRef(null);

  useEffect(()=>{
    containerRef.current.style.backgroundColor = colorCode
  },[colorCode]);
  
  return (
    <div className={css.ccWrapper} ref={containerRef} onClick={() => {cardClicked(taskID)}}>
          <p className={css.ccTitle}>
               {title}
          </p>
          <p className={css.ccDesc}>
             {description}
          </p>
          <div className={css.ccSubwrap}>
                <img src={bookmark} alt="" width={20}/>
                <p className={css.ccSub}>
                    {checkLists}  checklist
                </p>
          </div>
          <div className={css.reminder}> 
            <img src={reminder} alt=""  width={22}/>
            <p className={css.ccRdate}>
                on {dueDate}
            </p>
          </div>
          <div className={css.created}>
               <p className={css.cDate}>
                  {createDate}
               </p>
          </div>
    </div>
  )
}

export default ChecklistCard;