import React, { useEffect, useRef, useState } from 'react';
import css from "../../../styles/Tasks/AddCheckbox.module.css"

function AddCheckbox({getData , taskName , modeType}) {
  const taskref = useRef(null);
  const [task,setTask] = useState('');
  const [taskEntered,setTaskEntered] = useState(false);
  const [isChecked, setisChecked] = useState(false);

  const handleTaskEntered = (event) =>{
    if (event.key === 'Enter') {
        event.preventDefault();
        setTask(event.target.value);
        setTaskEntered(!taskEntered);
        getData(task)
    }
  }

  const handleCheckbox = (event) =>{
      setisChecked(event.target.checked);
      taskref.current.style.textDecoration = 'line-through';
      taskref.current.style.color = "#959695"
  }

  const handleTaskEdit= () =>{
        setTaskEntered(!taskEntered)
  }

  return (
    <div className={css.container} >
        {/* this is the checkbox input */}
        <input className={css.checkBox} 
               type="checkbox"
              //  using these modes  will prevent from task being checked or completed in create and update mode
               onChange={modeType === "Create" || modeType === "Update"  ?  null : handleCheckbox } 
               disabled ={modeType === "Create" || modeType === "Update"  ? null : isChecked} />

        { modeType === "View" ?
           <p className={css.task} ref={taskref} onClick={null}>
                {taskName}
            </p> 
        :
        ( taskEntered ?
              <p className={css.task} ref={null} onClick={handleTaskEdit}>
                      {task}
              </p> 
              :
              <input className = {css.taskname} 
                     value= {task}
                    type="text"
                    placeholder='add your task here'
                    onChange={(e)=>{setTask(e.target.value)}}
                    onKeyDown={handleTaskEntered}/>
        )
        }
    </div>
  )
}

export default AddCheckbox;