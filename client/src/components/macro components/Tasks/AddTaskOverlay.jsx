import React, { useEffect, useState } from 'react';
import css from "../../../styles/Tasks/AddTaskOverlay.module.css";
import AddCheckbox from './AddCheckbox';
import Delete from "../../../assets/delete.png";
import {getCreateDate} from '../../../utils/notesUtils';
import axios from 'axios';

function AddTaskOverlay({onCancel,modeType,taskID,onAddTask}) {

  // State Variables

  // taskList is nothing do with backend , we won't send
  // this list rather it only used to render list of components
  // if any updates needs to be done to this list, do only 
  // on subTasks list ,since the components are inflated
  // from this subTasks list only.

  const [taskList ,setTaskList] = useState([]);
  const [taskData,settaskData] = useState(null);
  const [Editmode , setEditMode] = useState('');
  const userId = sessionStorage.getItem("userID");

  // modeType - View main UI , Edit This UI , Create Main UI
  const colorCodes = ["#ff8989", // red
                      "rgb(255, 186, 59)",  // Orange
                      "rgb(249, 249, 89)",  // yellow
                      "rgb(158, 255, 158)", // green
                      "rgb(142, 243, 243)", // teal
                      "rgb(170, 231, 255)", // sky blue
                      "rgb(185, 195, 255)", // blue
                      "#cda5ff",            // purple
                      "rgb(255, 208, 216)" ,// pink
                     ]
  
  // this get data from user inputs (atmost 5)
  const [formData,setFormData] = useState({
    title : '',
    description : '',
    startDate : '',
    dueDate : '',
    subTasks : [],
  })

  // this will data is Update mode
  const [updateData,setUpdateData] = useState({
    title : '',
    description : '',
    startDate : '',
    dueDate : '',
    subTasks : [],
  })
  
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colorCodes.length);
    return colorCodes[randomIndex];
  }

  const resetFormData = () =>{
         // resettting form
        setFormData({
                  title: '',
                  description: '',
                  startDate: '',
                  dueDate: '',
                  subTasks: [],
                });
        setTaskList([]);
  }
  // this close the overlay and clears form
  const handleCancel = () =>{
        setEditMode('')
        resetFormData()
        onCancel()
  }

  // this get value from each task added for create
  const handleTaskValue = (value) =>{
        setFormData((formData) => ({
          ...formData,
          subTasks: [...formData.subTasks, value],
        }));

  }

  // this get value from each task added for create
  const handleUpdateTaskValue = (value) =>{
    setUpdateData((updateData) => ({
      ...updateData,
      subTasks: [...updateData.subTasks, value],
    }));

}

  // this will get data form inputs and maps to object
  const handleFormData = (event) =>{
        const {name,value} = event.target
        setFormData((formData) =>({
          ...formData,[name]:value
        }));
  }

  // same as above handler ,except for update
  const handleUpdateData = (event) =>{
    const {name,value} = event.target
    setUpdateData((updateData) =>({
      ...updateData,[name]:value
    }));
  }

  // will populate task components
  const addNewTaskAction = () =>{
        const component = <AddCheckbox modeType = {modeType}
                                       taskName={null}
                                       key={taskList.length} 
                                       getData = {handleTaskValue}/>
        setTaskList((taskList) => {
          return [...taskList, component];
        });
  }

  const UpdateNewTaskAction = () =>{
        const component = <AddCheckbox modeType = {Editmode}
                                       taskName={null}
                                       getData = {handleUpdateTaskValue}/>
        setTaskList((taskList) => {
                return [...taskList, component];
            });
  }

  // functions are defined correctly
  const UpdateMode = () => {
      setEditMode('Update');
  }

  const ActionSaveChanges = () => {
      setEditMode('');
  }

  const DiscardChanges = () => {
      setEditMode('');
  }

 // backend actions 

 const AxiosCreateProjectEvent = async (data) =>{
  try {
   const res = await axios.post("/track/",data,{
     headers: {
         'Content-Type': 'application/json'
       }
   });
  } catch (error) {
   console.log(error,"event add error")
  }
}


 // this funtion will add task to database
 const AxiosAddNewEntry = async (event) =>{
       event.preventDefault()
       const createDate = getCreateDate()
       const randomColorCode = getRandomColor()
       const Data = {
            userID: userId,
            title: formData.title,
            description: formData.description,
            subTasks: formData.subTasks,
            createDate: createDate,
            startDate :formData.startDate,
            dueDate: formData.dueDate,
            colorCode : randomColorCode
       }
       try {

        const res = await axios.post("/tasks/addTask/",Data,{
          headers: {
              'Content-Type': 'application/json'
            }
        });
        // console.log(res)

        const eventData = {
          userID: userId,
          Event: Data.title,
          start: Data.startDate,
          end: Data.dueDate,
          eventColor: Data.colorCode,
      }
        AxiosCreateProjectEvent(eventData)
        onAddTask()
        resetFormData()
        onCancel()
       } catch (error) {
         console.log(error);
       }

  }
  const AxiosGetNoteEntry = async () =>{
    try {
      const res =  await axios.get(`/tasks/gettasks/notes/${taskID}`)
      // this state object for view
      settaskData(res.data)
      // this state object for Update
      setUpdateData({
        title : res.data.tasks[0].title,
        description : res.data.tasks[0].description,
        startDate : res.data.tasks[0].startDate,
        dueDate : res.data.tasks[0].dueDate,
        subTasks : res.data.tasks[0].subTasks,
      })
      // conditional task list component update
      if(Editmode === "Update"){
        const ExistingComponents = res.data.tasks[0].subTasks.map((task)=>
             (<AddCheckbox taskName={task} getData={handleUpdateTaskValue} modeType={modeType}/> ))
        setTaskList((taskList) => {
          return [...taskList, ExistingComponents];
      });

      }
      // console.log(res.data)
      // console.log(userId)
     } catch (error) {
       console.log(error)
     }
  }
  const AxiosUpdateData = async (event) =>{
      try {
        const res = await axios.put(`/tasks/${taskID}`,updateData)
        console.log(res.data)
        onAddTask()
        ActionSaveChanges()
      } catch (error) {
        console.log(error)
      }
  }

  const AxiosDeleteEntry = async (event) =>{
        event.preventDefault()
        try {
          const res =  await axios.delete(`/tasks/${taskID}`)
          onAddTask()
          onCancel()
        } catch (error) {
          console.log(error)
        }
  }

  useEffect(()=>{
    if(modeType === "View"){
        AxiosGetNoteEntry()
    }
    console.log(formData)

  },[modeType, // swicth components by mode
    Editmode, // get to do 's from
    taskID,      // rerender with new value
    ]);

  return (
    <div className={css.container}>
      <div className={css.Wrapper}>
          {/* this will only appear in view */}
          { modeType === "View" ?

            <img className={css.deleteBtn} onClick={AxiosDeleteEntry} src={Delete} alt="" width={24} /> 
          
          : '' }

          {/* this UI tested fro Create View  ✅*/}
          <div className={`${modeType === 'Create' || Editmode === 'Update'? css.addTitleWrap : css.viewTitleWrap}`}>
              <p className={`${modeType === 'Create' || Editmode === 'Update'? css.title : css.close}`}>Title</p>
              {modeType === 'View' && Editmode === '' ?
                  (taskData && taskData.tasks && taskData.tasks.length > 0 &&
                  (<p className={css.titleValue}>{taskData.tasks[0].title}</p>) )
                  :
                  <input type="text"
                         value={Editmode === "Update" ?  updateData.title :formData.title}
                         name="title" 
                         maxLength={20}
                         onChange={Editmode === "Update" ? handleUpdateData : handleFormData}/> 
              
              }
          </div>
          
          {/* this UI tested fro Create View  ✅*/}
          <div className={`${modeType === 'Create' || Editmode === 'Update'? css.addDescription : css.viewDescription}`}>
              <p className={`${modeType === 'Create' || Editmode === 'Update'? css.title : css.close}`}>Description <span>( Optional )</span></p>
              {modeType === 'View' && Editmode === '' ?
               (taskData && taskData.tasks && taskData.tasks.length > 0 &&
                <p className={css.descValue}> {taskData.tasks[0].description} </p> )
              :
              <input type="text" 
                     value={Editmode === "Update" ?  updateData.description :formData.description}
                     name="description"
                     maxLength={150}
                     onChange={Editmode === "Update" ? handleUpdateData : handleFormData}/>
             
              }
          </div>

          {/* this UI tested fro Create View  ✅*/}
          <div className={css.timeWrapper}>
              <div className={css.startWrapper}>
                 <p className={css.title}>Start <span>( Optional )</span></p>
                 {modeType === 'View' && Editmode === '' ?
                 (taskData && taskData.tasks && taskData.tasks.length > 0 &&
                  <p className={css.startValue}> {taskData.tasks[0].startDate} </p> )
                  :
                  <input type="date"
                         value={Editmode === "Update" ?  updateData.startDate : formData.startDate}
                         name="startDate"
                         onChange={Editmode === "Update" ? handleUpdateData : handleFormData}/> 
              }
              </div>
              <div className={css.dueWrapper}>
                 <p className={css.title}>Due <span>( Optional )</span></p>
                 {modeType === 'View' && Editmode === '' ?
                 (taskData && taskData.tasks && taskData.tasks.length > 0 &&
                  <p className={css.dueValue}> {taskData.tasks[0].dueDate} </p> )
                  :
                  <input type="date"
                        name = 'dueDate'
                        value={Editmode === "Update" ?  updateData.dueDate :formData.dueDate}
                        onChange={Editmode === "Update" ? handleUpdateData : handleFormData}/>
                  }
              </div>
          </div>
          
          {/* this UI tested fro Create View  ✅*/}
          <div className={css.taskWrapper}>
              <div className={css.taskLegend}>
                  <p>To do's</p>
              </div>
              {
                modeType === 'View' && Editmode === '' ?  taskData && taskData.tasks && taskData.tasks.length > 0 && taskData.tasks[0].subTasks.map((task)=>{
                   return <AddCheckbox taskName={task} getData={handleTaskValue} modeType={modeType}/>
                }) : taskList
              }
              { modeType === 'Create' || Editmode === 'Update' ?
              <p className={css.addNewTaskBtn} onClick={Editmode === "Update" ? UpdateNewTaskAction : addNewTaskAction}>Add new task</p> :
              ''
              }
          </div>

          <div className={css.actionBtns}>
             <button className={css.cancelBtn} onClick={ Editmode === '' ? handleCancel : DiscardChanges}>
               {Editmode === 'Update' ? 'Discard' : 'Cancel'}
             </button>
             {modeType === 'Create' ? (
                <button className={css.addBtn} onClick={AxiosAddNewEntry}>
                     Add
                </button>
                ) : Editmode === '' ? (
                        <button className={css.addBtn} onClick={UpdateMode}>
                             Edit
                        </button>
                    ) : Editmode === 'Update' ? (
                        <button className={css.addBtn} onClick={AxiosUpdateData}>
                         Save Changes
                        </button>
             ) : ''}
          </div>
       </div>
    </div>
  )
}

export default AddTaskOverlay;