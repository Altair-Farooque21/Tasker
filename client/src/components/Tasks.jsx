import React ,{useEffect, useState} from 'react';
import css from "../styles/Tasks.module.css";
import TaskCard from './macro components/Tasks/TaskCard';
import addFab from "../assets/plus.png";
import AddTaskOverlay from './macro components/Tasks/AddTaskOverlay';
import Project from './macro components/Tasks/Project';
import DeleteProject from './macro components/Tasks/DeleteProject';
// import { events } from '../../../server/src/Models/projects';

import axios from 'axios';

function Tasks() {

  const [closeOverlay, setcloseOverlay] = useState(false);
  const [addTask, setaddTask] = useState(false);
  const [showProject,setshowProject] = useState(false);
  const [closeProject, setcloseProject] = useState(false);
  const [closeDelAlert ,setcloseDelAlert ] = useState(false);
  const [openDeleteAlert , setOpenDeleteAlert]  = useState(false);
  const [formMode ,setFormMode] = useState('create');
  const [projectID , setProjectID] = useState('')

  const userID = sessionStorage.getItem('userID')
  const [projectData ,setProjectData] = useState(null);

  const handleshowProject= () =>{
    setFormMode('')
    setcloseProject(!closeProject);
    setshowProject(!showProject);
  }
  const handleAddTask = () => {
    setFormMode('create');
    setcloseOverlay(!closeOverlay);
    setaddTask(!addTask);
    console.log(addTask);
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
        setaddTask(!addTask);
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

                return <TaskCard openProject = {handleshowProject} 
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

       <div className={`${css.addTaskOverlay} ${addTask ? css.show : ''} ${!closeOverlay ? css.close : ''} `}>
           {/* add task overlay component  */}
            <AddTaskOverlay onClose={handleOverlay} modeType={formMode} pID = {projectID} onAddProject = {AxiosGetData}/>
       </div>
       <div className={`${css.projectOverlay} ${!showProject ? css.show : ''} ${!closeProject ? css.close : ''}`}>
          {/* View Porject work */}
            <Project closeProject = {handleCloseProject}/>
       </div>
       <div className={`${css.deleteProjectAlert} ${openDeleteAlert ? css.show : ''}  ${!closeDelAlert ? css.close : ''}`}>
            <DeleteProject actionCancel={ActioncloseDeleteAlert} onDeleteRefresh={AxiosGetData} pid = {projectID} />
       </div>
    </div>
  )
}

export default Tasks;