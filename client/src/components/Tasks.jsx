import React ,{useEffect, useState} from 'react';
import css from "../styles/Tasks.module.css";
import TaskCard from './macro components/Tasks/TaskCard';
import addFab from "../assets/plus.png";
import AddTaskOverlay from './macro components/Tasks/AddTaskOverlay';
import Project from './macro components/Tasks/Project';
import DeleteProject from './macro components/Tasks/DeleteProject';

function Tasks() {

  const [closeOverlay, setcloseOverlay] = useState(false);
  const [addTask, setaddTask] = useState(false);
  const [showProject,setshowProject] = useState(false);
  const [closeProject, setcloseProject] = useState(false);
  const [closeDelAlert ,setcloseDelAlert ] = useState(false);
  const [openDeleteAlert , setOpenDeleteAlert]  = useState(false);
  const [formMode ,setFormMode] = useState('create');

  const handleshowProject= () =>{
    setcloseProject(!closeProject);
    setshowProject(!showProject);
  }
  const handleAddTask = () => {
    setFormMode('create');
    setcloseOverlay(!closeOverlay);
    setaddTask(!addTask);
    console.log(addTask);
  }

  const handleShowDeleteAlert = () =>{
     setcloseDelAlert(!closeDelAlert);
     setOpenDeleteAlert(!openDeleteAlert);
  }

  const handleShowEditOverlay = () =>{
        setFormMode('update')
        setcloseOverlay(!closeOverlay);
        setaddTask(!addTask);
        console.log(formMode)
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
  return (
    <div className={css.tasksContainer}>
       <div className={css.tasksWrapper}>
            {/* this is the  container grid for tasks */}
            <TaskCard openProject = {handleshowProject} openDeleteOverlay={handleShowDeleteAlert} openEditOverlay={handleShowEditOverlay}/>
       </div>
       <img onClick ={handleAddTask} className={css.AddFAB} src={addFab} alt="" width={56} color='white'/>
       <div className={`${css.addTaskOverlay} ${addTask ? css.show : ''} ${!closeOverlay ? css.close : ''} `}>
           {/* add task overlay component  */}
            <AddTaskOverlay onClose={handleOverlay} modeType={formMode}/>
       </div>
       <div className={`${css.projectOverlay} ${!showProject ? css.show : ''} ${!closeProject ? css.close : ''}`}>
          {/* View Porject work */}
           <Project closeProject = {handleCloseProject}/>
       </div>
       <div className={`${css.deleteProjectAlert} ${openDeleteAlert ? css.show : ''}  ${!closeDelAlert ? css.close : ''}`}>
            <DeleteProject actionCancel={ActioncloseDeleteAlert}/>
       </div>
    </div>
  )
}

export default Tasks;