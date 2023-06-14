import React ,{useState}from 'react';
import css from "../../../styles/Projects/ProjectSubtaskFrom.module.css";
import closeIcon from "../../../assets/close.png";
import axios from 'axios';

function ProjectSubtaskFrom({closeForm ,onAddSubtask ,pID}) {

  const [subtasks,setsubtasks] = useState({
        title :'',
        deadline : ''
  })

  const handleInputChange = (e) =>{
        const {name,value} = e.target
        setsubtasks({...subtasks,[name]:value})
  }
  
  const AxiosCreateSubtask = async () =>{
        const data = {
          projectID : pID,
          title: subtasks.title,
          deadline: subtasks.deadline
        } 
        console.log(data)
        try {
          const res = await axios.post(`/project/subtasks/`,data,{
            headers: {
                'Content-Type': 'application/json'
              }
          });
          console.log(res)
          onAddSubtask()
          setsubtasks({title:'',deadline:''})
          closeForm()
        } catch (error) {
          console.log(error)
        }
  }
  return (
        <div className={css.container}>
             <div className={css.titleWrapper}>
                <p>
                    Name
                </p>
                <input type="text" name = "title" value = {subtasks.title} onChange={handleInputChange}/>
             </div>
             <div className={css.deadlineWrapper}>
                <p>
                    Deadline
                </p>
                <input type="date" name="deadline" value = {subtasks.deadline} onChange={handleInputChange} />
             </div>
             <button className={css.AddBtn} onClick={AxiosCreateSubtask}> Add </button>
             <img className = {css.closeOverlay} src={closeIcon} alt="" width={22}  onClick={closeForm}/>
        </div>
  )
}

export default ProjectSubtaskFrom;