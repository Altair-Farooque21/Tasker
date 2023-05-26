import React ,{useState} from 'react';
import css from "../styles/Tasks.module.css";
import TaskCard from './macro components/Tasks/TaskCard';
import addFab from "../assets/plus.png";
import AddTaskOverlay from './macro components/Tasks/AddTaskOverlay';
import Project from './macro components/Tasks/Project';

function Tasks() {

  const [closeOverlay, setcloseOverlay] = useState(false);
  const [addTask, setaddTask] = useState(false);
  const [showProject,setshowProject] = useState(false);
  const [closeProject, setcloseProject] = useState(false);

  const handleshowProject= () =>{
    setcloseProject(!closeProject);
    setshowProject(!showProject);
  }
  const handleAddTask = () => {
    setcloseOverlay(!closeOverlay);
    setaddTask(!addTask);
    console.log(addTask);
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
            <TaskCard openProject = {handleshowProject}/>
            <TaskCard openProject = {handleshowProject}/>
            <TaskCard openProject = {handleshowProject}/>
            <TaskCard openProject = {handleshowProject}/>
            <TaskCard openProject = {handleshowProject}/>
            <TaskCard openProject = {handleshowProject}/>
            <TaskCard openProject = {handleshowProject}/>
            <TaskCard openProject = {handleshowProject}/>
            <TaskCard openProject = {handleshowProject}/>
       </div>
       <img onClick ={handleAddTask} className={css.AddFAB} src={addFab} alt="" width={56} color='white'/>
       <div className={`${css.addTaskOverlay} ${addTask ? css.show : ''} ${!closeOverlay ? css.close : ''} `}>
            <AddTaskOverlay onClose={handleOverlay} />
       </div>
       <div className={`${css.projectOverlay} ${!showProject ? css.show : ''} ${!closeProject ? css.close : ''}`}>
           <Project closeProject = {handleCloseProject}/>
       </div>
    </div>
  )
}

export default Tasks;