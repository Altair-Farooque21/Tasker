import React from 'react';
import css from './DashBoardContent.module.css';
import person1 from "../../assets/person2.jpg";

function DashBoardContent() {
  return (
    <div className={css.contentWrapper}>

        <div className={css.tasksWrapper}>
             <p className={css.tasksTitle}>Tasks</p>
             <div className={css.tasksContainer}>
                 {/* here goes the minimal card components */}
                 tasks card
             </div>
        </div>

        <div className={css.ntWrapper}>
            {/* notes section */}

            <div className={css.notesWrapper}>
                <p className={css.notesTitle}>Notes</p>
                <div className={css.notesContainer}>
                     {/* here goes the notes minimal components */}
                     notes card
                </div>
            </div>
            {/* track section */}

            <div className={css.trackWrapper}>
                <p className={css.trackTitle}>Track</p>
                <div className={css.trackContainer}>
                     {/* here goes the tracks minimal components */}
                     track card
                </div>
            </div>

        </div>

        <div className={css.profileWrapper}>

             <div className={css.profileWrap}>
                   <img className={css.pfImg} src={person1} alt="" width={60}/>
                   <div className={css.profileContainer}>
                        <p className={css.pfName}> Julia jane </p>
                        <p className={css.pfProfession}> Project manager </p>
                        <p className={css.pfdate}> 4 / 05 </p>
                        <p className={css.pfday}> Wed</p>
                        <p className={css.pfLegend}> 5 tasks today</p>

                   </div>
             </div>

             <div className={css.messageConatiner}>
                  
                   <div className={css.notiWrap}>
                        <p className={css.msgTitle}> Notifications </p>
                        <ion-icon name="notifications-outline"></ion-icon>
                   </div>

                   <div className={css.msgSection}>
                       {/* this contains users dm or notifications */}
                   </div>

             </div>

        </div>

    </div>
  );
}

export default DashBoardContent;