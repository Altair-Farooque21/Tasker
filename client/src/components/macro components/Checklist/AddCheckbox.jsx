import React, { useRef, useState } from 'react';
import css from "../../../styles/Checklist/AddCheckbox.module.css"

function AddCheckbox() {
  const taskref = useRef(null);
  const [task,setTask] = useState('');
  const [taskEntered,setTaskEntered] = useState(true);
  const [isChecked, setisChecked] = useState(false);

  const handleTaskEntered = (event) =>{
    if (event.key === 'Enter') {
        event.preventDefault();
     setTaskEntered(!taskEntered);
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
        <input className={css.checkBox} type="checkbox" name="" id="" onChange={ taskEntered ? '' : handleCheckbox} disabled ={isChecked} />
        { taskEntered ?
        <input className = {css.taskname} 
               value= {task}
               type="text"
               placeholder='add your task here'
               onChange={(e)=>{setTask(e.target.value)}}
               onKeyDown={handleTaskEntered}/> :
        <p className={css.task} ref={taskEntered ? '' : taskref} onClick={ isChecked ? '' : handleTaskEdit }>{task}</p>
}
    </div>
  )
}

export default AddCheckbox;