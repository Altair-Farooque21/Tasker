import React ,{useEffect, useState} from 'react';
import css from "../styles/Projects.module.css";
import ProjectCard from './macro components/Projects/ProjectCard';
import addFab from "../assets/plus.png";
import AddProjectOverlay from './macro components/Projects/AddProjectOverlay';
import Project from './macro components/Projects/Project';
import DeleteProject from './macro components/Projects/DeleteProject';
// import { events } from '../../../server/src/Models/projects';

import axios from 'axios';

function Projects() {

  const [closeOverlay, setcloseOverlay] = useState(false);
  const [addProject, setaddProject] = useState(false);
  const [showProject,setshowProject] = useState(false);
  const [closeProject, setcloseProject] = useState(false);
  const [closeDelAlert ,setcloseDelAlert ] = useState(false);
  const [openDeleteAlert , setOpenDeleteAlert]  = useState(false);
  const [formMode ,setFormMode] = useState('create');
  const [projectID , setProjectID] = useState('')

  const userID = sessionStorage.getItem('userID')
  const [projectData ,setProjectData] = useState(null);

  const handleshowProject= (projectID) =>{
    setProjectID(projectID)
    setFormMode('')
    setcloseProject(!closeProject);
    setshowProject(!showProject);
  }
  const handleAddTask = () => {
    setFormMode('create');
    setcloseOverlay(!closeOverlay);
    setaddProject(!addProject);
    console.log(addProject);
  }

  const handleShowDeleteAlert = (value) =>{
     setProjectID(value)
     setcloseDelAlert(!closeDelAlert);
     setOpenDeleteAlert(!openDeleteAlert);
  }

  const handleShowEditOverlay = (value) =>{
        setProjectID(value)
        setFormMode('update')
        setcloseOverlay(!closeOverlay);
        setaddProject(!addProject);
  }

  const ActioncloseDeleteAlert = () =>{
    setcloseDelAlert(!closeDelAlert);
  }

  const handleOverlay = ()=>{
    setcloseOverlay(!closeOverlay);
  }
  const handleCloseProject = ()=>{
    setcloseProject(!closeProject);
    console.log(closeProject);
  }

  // backend Actions

  const AxiosGetData = async () =>{
        try {
           const res =  await axios.get(`/projects/${userID}`)
           setProjectData(res.data)
          //  console.log(res)
        } catch (error) {
          console.log(error)
        }
  }

  useEffect(()=>{
    if(projectData === null){
      AxiosGetData()
    }
    else{
      console.log("server down!")
    }
  },[]);

  return (
    <div className={css.tasksContainer}>

       <div className={css.tasksWrapper}>
            {/* this is the  container grid for tasks */}
            {
              projectData && projectData.map((project) =>{

                return <ProjectCard openProject = {handleshowProject} 
                                 openDeleteOverlay={handleShowDeleteAlert}
                                 openEditOverlay={handleShowEditOverlay} 
                                 ProjectID = {project._id}
                                 Title = {project.title}
                                 Description = {project.description}
                                 DueDate = {project.dueDate}
                                 Priority = {project.priority}
                      />
              })
            }
       </div>

       <img onClick ={handleAddTask} className={css.AddFAB} src={addFab} alt="" width={56} color='white'/>

       <div className={`${css.addTaskOverlay} ${addProject ? css.show : ''} ${!closeOverlay ? css.close : ''} `}>
           {/* add task overlay component  */}
            <AddProjectOverlay onClose={handleOverlay} modeType={formMode} pID = {projectID} onAddProject = {AxiosGetData}/>
       </div>
       <div className={`${css.projectOverlay} ${!showProject ? css.show : ''} ${!closeProject ? css.close : ''}`}>
          {/* View Porject work */}
            <Project pID = {projectID} closeProject = {handleCloseProject}/>
       </div>
       <div className={`${css.deleteProjectAlert} ${openDeleteAlert ? css.show : ''}  ${!closeDelAlert ? css.close : ''}`}>
            <DeleteProject actionCancel={ActioncloseDeleteAlert} onDeleteRefresh={AxiosGetData} pid = {projectID} />
       </div>
    </div>
  )
}

export default Projects;