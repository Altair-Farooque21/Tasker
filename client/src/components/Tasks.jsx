import React, { useEffect, useState } from 'react';
import css from "../styles/Tasks.module.css";
import TaskCard from './macro components/Tasks/TaskCard';
import addFab from "../assets/plus.png";
import AddTaskOverlay from './macro components/Tasks/AddTaskOverlay';
import axios from 'axios';

function Tasks() {

  const [closeOverlay ,setCloseOverlay] = useState(false);
  const [openAddOverlay , setOpenAddOverlay] = useState(false);
  const [mode,setMode] = useState("Create");
  const [taskId,setTaskId] = useState('');
  const [resData,setresData] = useState(null);
  const userId = sessionStorage.getItem("userID");
  
  const DateFormatter = (dateStr) =>{
    const date = new Date(dateStr);
    const options = { month: "short", weekday: "short", day: "2-digit" };
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate
  }

  const ActionCloseOverlay = () =>{
    setCloseOverlay(!closeOverlay);
  }

  const ActionOpenCreateOverlay = () =>{
    setMode('Create')
    setCloseOverlay(!closeOverlay);
    setOpenAddOverlay(!openAddOverlay);
  }

  const ActionOpenCard = (idx) =>{
        setTaskId(idx)
        setMode("View");
        setCloseOverlay(!closeOverlay);
        setOpenAddOverlay(!openAddOverlay);
  }

  const AxiosFetchData = async () => {
       try {
        const res =  await axios.get(`/tasks/gettasks/${userId}`)
        setresData(res.data);
        // console.log(res)
        // console.log(userId)
       } catch (error) {
         console.log(error)
       }
  }

  useEffect(()=>{
      if(resData === null){
        AxiosFetchData()
      }
      else{
        console.log("Server down!")
      }
  },[]);

  return (
    <div className={css.ChecklistContainer}>
       <div className={css.ChecklistWrapper}>
            {/* this is the  container grid for tasks */}
            {resData && resData.tasks.map(task => (
                  <TaskCard
                        key={task._id}
                        title={task.title}
                        description={task.description}
                        checkLists={task.subTasks.length}
                        createDate={task.createDate}
                        dueDate={DateFormatter(task.dueDate)}
                        taskID={task._id}
                        cardClicked={ActionOpenCard}
                        colorCode = {task.colorCode}
                    />
              ))}
       </div>

       <img className={css.AddFAB} src={addFab} alt="" width={56} color='white' onClick={ActionOpenCreateOverlay}/>

       <div className={`${css.addCheclistOverlay} ${openAddOverlay ? css.show : ''} ${!closeOverlay ? css.close : ''}`}>
            <AddTaskOverlay onCancel = {ActionCloseOverlay}
                                 taskID={taskId} 
                                 modeType = {mode} 
                                 onAddTask = {AxiosFetchData} />
       </div>
    </div>
  )
}

export default Tasks;