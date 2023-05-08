import React ,{useState} from 'react';
import css from "../styles/Tasks.module.css";
import TaskCard from './macro components/Tasks/TaskCard';
import AddTaskOverlay from './macro components/Tasks/AddTaskOverlay';

function Tasks() {

  const [showOverlay, setShowOverlay] = useState(false);

  const handleCardClicked = () =>{
    setShowOverlay(true);
  }

  const handleOverlay = ()=>{
      setShowOverlay(false);
  }
 
  return (
    <div className={css.tasksContainer}>
       <div className={css.tasksWrapper}>
            {/* this is the  container grid for tasks */}
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            <TaskCard />
            
            <ion-icon onClick= {handleCardClicked} className={css.fabBtn} name="add-outline"></ion-icon>
            
       </div>
       
       <div className={`${css.addTaskOverlay} ${showOverlay ? css.show : css.close}`}>
            <AddTaskOverlay onClose={handleOverlay} />
       </div>

    </div>
  )
}

export default Tasks;