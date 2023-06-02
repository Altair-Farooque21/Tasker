import React ,{useState} from 'react';
import css from './DashBoardContent.module.css';
import person1 from "../../assets/person2.jpg";
import projects from "../../assets/projects.png";
import notes from "../../assets/sticky-note.png";
import bell from "../../assets/notibell.png";
import TasksDashboad from './Tasks/TasksDashboad';
import NotesDashboard from './Notes/NotesDashboard';
import Profile from '../Profile';
import DashboardTrack from './DashboardTrack';

function DashBoardContent() {

    const [closeProfile,setcloseProfile] = useState(false);

    const [showProfile,setshowProfile] = useState(false);

    const handleProfileShow = () =>{
          setcloseProfile(!closeProfile);
          setshowProfile(!showProfile);
    }
    const handleProfileClose = () =>{
          setcloseProfile(!closeProfile);
    }
  return (
    <div className={css.contentWrapper}>

        <div className={css.tasksWrapper}>
             <div className={css.taskTitleWrap}>
                 <p className={css.tasksTitle}>Projects</p>
                 <img src={projects} alt=""  width={24}/>
             </div>
             <div className={css.tasksContainer}>
                 {/* here goes the minimal card components */}
                 <TasksDashboad />
                 <TasksDashboad />
                 <TasksDashboad />
                 <TasksDashboad />
                 <TasksDashboad />
                 <TasksDashboad />
                 <TasksDashboad />
                 <TasksDashboad />
                 <TasksDashboad />
             </div>
        </div>

        <div className={css.ntWrapper}>
            {/* notes section */}

            <div className={css.notesWrapper}>
                <div className={css.notesTitleWrap}>
                    <p className={css.notesTitle}>Notes</p>
                    <img src={notes} alt="" width={24}/>
                </div>
                <div className={css.notesContainer}>
                     {/* here goes the notes minimal components */}
                     <NotesDashboard />
                     <NotesDashboard />
                     <NotesDashboard />
                     <NotesDashboard />
                     <NotesDashboard />
                     <NotesDashboard />
                </div>
            </div>
            {/* track section */}

            <div className={css.trackWrapper}>
                <p className={css.trackTitle}>Track</p>
                <div className={css.trackContainer}>
                     {/* here goes the tracks minimal components */}
                     <DashboardTrack />
                </div>
            </div>

        </div>

        <div className={css.profileWrapper}>

             <div className={css.profileWrap}>
                   <img className={css.pfImg} src={person1} alt="" width={60} onClick={handleProfileShow}/>
                   <div className={css.profileContainer}>
                        <p className={css.pfName} onClick={handleProfileShow}> Julia jane </p>
                        <p className={css.pfProfession}> Project manager </p>
                        <p className={css.pfdate}> 4 / 05 </p>
                        <p className={css.pfday}> Wed</p>
                        <p className={css.pfLegend}> 5 tasks today</p>

                   </div>
             </div>

             <div className={css.messageConatiner}>
                  
                   <div className={css.notiWrap}>
                        <p className={css.msgTitle}> Notifications </p>
                        <img src={bell} alt="" width={24}/>
                   </div>

                   <div className={css.msgSection}>
                       {/* this contains users dm or notifications */}
                   </div>

             </div>

        </div>
        <div className={`${css.profileViewContainer} ${showProfile ? css.show : ''} ${!closeProfile ? css.close : ''}`}>
                <Profile closeProfile = {handleProfileClose}/>
        </div>
    </div>
  );
}

export default DashBoardContent;