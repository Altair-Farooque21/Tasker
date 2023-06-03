import React from 'react';
import css from '../../../styles/Checklist/ChecklistCard.module.css';
import reminder from "../../../assets/reminder.png";
import bookmark from "../../../assets/bookmark.png";

function ChecklistCard({cardClicked}){  
  return (
    <div className={css.ccWrapper} onClick={cardClicked}>
          <p className={css.ccTitle}>
               API Integration
          </p>
          <p className={css.ccDesc}>
             Integrate the API in the both backend and frontend
          </p>
          <div className={css.ccSubwrap}>
                <img src={bookmark} alt="" width={20}/>
                <p className={css.ccSub}>
                    9  checklist
                </p>
          </div>
          <div className={css.reminder}> 
            <img src={reminder} alt=""  width={22}/>
            <p className={css.ccRdate}>
                on 7 Tue, April
            </p>
          </div>
          <div className={css.created}>
               <p className={css.cDate}>
                  05 mon , 2023
               </p>
          </div>
    </div>
  )
}

export default ChecklistCard;