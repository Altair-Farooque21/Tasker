import React, { useState } from 'react';
import css from "../../../styles/Tasks/Project.module.css";
import closeIcon from "../../../assets/close.png";
import AddProjectSubTask from './AddProjectSubTask';
import ProjectSubtaskFrom from './ProjectSubtaskFrom';

function Project({closeProject}) {
    const [openSubtask,setopenSubtask] = useState(false);
    const [closeSubtask,setcloseSubtask] = useState(false);

    const handleOpenSubtask = () =>{
        setcloseSubtask(!closeSubtask);
        setopenSubtask(!openSubtask);
    }

    const handleCloseSubtask = () =>{
        setcloseSubtask(!closeSubtask)
    }
  return (
    <div className={css.mainContainer}>
        <div className={css.projectInfoWrapper}>
            <div className={css.projectDescWrap}>
                <p className={css.projectTitle}>
                    Website Design
                </p>
                <p className={css.projectDesc}>
                        Website design involves various aspects such as user interface (UI) design, user experience (UX) design, graphic design, and web development. The UI design focuses on the look and feel of the website and how it interacts with users, while UX design focuses on the overall user experience, including ease of use, accessibility, and efficiency.
                </p>
            </div>
            <div className={css.projectInfoWrap}>
                <div className={css.projectDealinesWrap}>
                    <div className={css.projectStartWrap}>
                        <p >Start Date</p>
                        <p className={css.projectstartDate}>
                            02 / 05
                        </p>
                    </div>
                    <div className={css.projectDueWrap}>
                        <p>Due Date</p>
                        <p className={css.projectstartDate}>
                            26 / 05
                        </p>
                    </div>

                </div>
                <div className={css.projectTeamsWrap}>
                    <div className={css.projectpriorityWrap}>
                        <p>Priority</p>
                        <p className={css.projectpriority}>
                            High
                        </p>
                    </div>
                    <div className={css.projectTeamWrap}>
                        <p>Teams</p>
                        <div className={css.projectTeamIcons}>

                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* section 2  */}
        <div className={css.projectUtilWrapper}>
            <div className={css.projectSubtaskWrapper}>
                <p className={css.subtaskTitle}>Sub-Tasks</p>
                {/* sub tasks will be redenred here */}
                <div className={css.projectsubtasks}>
                    <AddProjectSubTask />
                    <AddProjectSubTask />
                    <AddProjectSubTask />
                    <AddProjectSubTask />
                    <AddProjectSubTask />
                    <button className={css.subTaskAddBtn} onClick={handleOpenSubtask}> Tap to add </button>
                </div>
            </div>
            <div className={css.projectTopicsWrapper}>
                <p className={css.topicsTitle}>Topics</p>
                 {/* topics will rendered here */}
                 <div className={css.projectTopics}>
                        <button className={css.topicAddBtn}> Add new topic </button>
                 </div>
            </div>
        </div>
        <img className = {css.closeOverlay} src={closeIcon} alt="" width={26}  onClick={closeProject}/>
        <div className={`${css.subTaskContainer} ${openSubtask ? css.show : ''} ${!closeSubtask ? css.close : ''}`}>
                    <ProjectSubtaskFrom closeForm={handleCloseSubtask}/>
        </div>
    </div>
  )
}

export default Project;