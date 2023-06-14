import React, { useEffect, useState } from 'react';
import css from "../../../styles/Projects/Project.module.css";
import closeIcon from "../../../assets/close.png";
import AddProjectSubTask from './AddProjectSubTask';
import ProjectSubtaskFrom from './ProjectSubtaskFrom';
import axios from 'axios';

function Project({closeProject,pID}) {
    const [openSubtask,setopenSubtask] = useState(false);
    const [closeSubtask,setcloseSubtask] = useState(false);
    const [projectInfo,setProjectInfo] = useState(null)
    const [subTasksData,setSubtasksData] = useState(null)

    const handleOpenSubtask = () =>{
        setcloseSubtask(!closeSubtask);
        setopenSubtask(!openSubtask);
    }

    const handleCloseSubtask = () =>{
        setcloseSubtask(!closeSubtask)
    }

    const getDueFormat = (DateStr) =>{
        const date = new Date(DateStr);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        return `${day} / ${month}`;
     }

    const AxiosGetProjectByID = async () => {
          try {
            const res = await axios.get(`/projects/project/${pID}`)
            setProjectInfo(res.data)
            // console.log(res)
          } catch (error) {
            console.log(error)
          }
    }

    const AxiosGetSubtasksData = async () => {
          try {
            const res = await axios.get(`/project/subtasks/${pID}`)
            setSubtasksData(res.data)
            console.log(res.data)
          } catch (error) {
            console.log(error)
          }
    }

    useEffect(()=>{
        AxiosGetProjectByID()
        AxiosGetSubtasksData()
    },[pID])

  return (
    <div className={css.mainContainer}>
        <div className={css.projectInfoWrapper}>
            <div className={css.projectDescWrap}>
                <p className={css.projectTitle}>
                    {projectInfo && projectInfo[0].title}
                </p>
                <p className={css.projectDesc}>
                    {projectInfo && projectInfo[0].description}
                </p>
            </div>
            <div className={css.projectInfoWrap}>
                <div className={css.projectDealinesWrap}>
                    <div className={css.projectStartWrap}>
                        <p >Start Date</p>
                        <p className={css.projectstartDate}>
                           {projectInfo && getDueFormat(projectInfo[0].startDate)}
                        </p>
                    </div>
                    <div className={css.projectDueWrap}>
                        <p>Due Date</p>
                        <p className={css.projectstartDate}>
                            {projectInfo && getDueFormat(projectInfo[0].dueDate)}
                        </p>
                    </div>

                </div>
                <div className={css.projectTeamsWrap}>
                    <div className={css.projectpriorityWrap}>
                        <p>Priority</p>
                        <p className={css.projectpriority}>
                            {projectInfo && projectInfo[0].priority}
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
                    {subTasksData && subTasksData.map((subTask) => {
                        return <AddProjectSubTask sID={subTask._id} 
                                                  key={subTask._id}
                                                  name = {subTask.title} 
                                                  deadline = {getDueFormat(subTask.deadline)} 
                                                  onCompleteTask = {AxiosGetSubtasksData} />
                    })}
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
                    <ProjectSubtaskFrom onAddSubtask = {AxiosGetSubtasksData} closeForm={handleCloseSubtask} pID = {pID}/>
        </div>
    </div>
  )
}

export default Project;