import React, { useState, useRef } from 'react';
import css from "../../../styles/Projects/AddProjectSubTask.module.css";
import axios from 'axios';

function AddProjectSubTask({name,sID,deadline,onCompleteTask}) {
  const taskRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
         setIsChecked(!isChecked);
         taskRef.current.style.color = "gray"
         taskRef.current.style.textDecoration = "line-through"
         AxiosDeleteThisTask()
  };

  const AxiosDeleteThisTask = async () =>{
        try {
          const res = await axios.delete(`/project/subtasks/${sID}`)
          onCompleteTask()
        } catch (error) {
          console.log(error)
        }
  }

  return (
    <div className={css.container}>
        <input className={css.checkBox} 
               type="checkbox" 
               name="subtask1" 
               checked={isChecked}
               onChange={handleCheckboxChange} 
               disabled = {isChecked}/>
        <p className={css.title} ref={taskRef}> {name}</p>
        <p className={css.deadline}> {deadline} </p>
    </div>
  )
}

export default AddProjectSubTask;