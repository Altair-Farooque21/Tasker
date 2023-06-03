import React, { useEffect, useState } from 'react';
import css from "../../../styles/Checklist/AddChecklistOverlay.module.css";
import AddCheckbox from './AddCheckbox';
import Delete from "../../../assets/delete.png";

function AddChecklistOverlay({onCancel,modeType}) {

  const [taskList ,setTaskList] = useState([]);
  const [viewMode,setViewMode] = useState('');
  const [Editmode , setEditMode] = useState('');

  const addNewTaskAction = () =>{
        const component = <AddCheckbox/>
        setTaskList((taskList) =>{
         return [...taskList,component]
        })
  }
  const AxiosAddNewEntry = async (event) =>{
     console.log('this will new entry in database')
  }
  const UpdateMode = () =>{
    setEditMode('Update');
  }

  const ActionSaveChanges = () =>{
    setEditMode('');
  }
  const AxiosUpdateData = async (event) =>{
    console.log("this will update fields in existing entry")
  }

  const AxiosDeleteEntry = async (event) =>{
    console.log('this will delete the entry');
  }

  useEffect(()=>{
    setEditMode('')
    setViewMode(modeType)
  },[modeType])

  const DiscardChanges = () =>{
     setEditMode('');
  }
  return (
    <div className={css.container}>
      <div className={css.Wrapper}>
          { modeType === "View" ?
          <img className={css.deleteBtn} src={Delete} alt="" width={24} /> : '' }
          <div className={css.addTitleWrap}>
              <p className={css.title}>Title</p>
              {modeType === 'Create' || Editmode === 'Update' ?
                  <input type="text" /> :
              <p className={css.titleValue}>Title text here</p> }
          </div>

          <div className={css.addDescription}>
              <p className={css.title}>Description <span>( Optional )</span></p>
              {modeType === 'Create' || Editmode === 'Update'  ?
              <input type="text" /> :
              <p className={css.descValue}> Description value </p>
              }
          </div>

          <div className={css.timeWrapper}>
              <div className={css.startWrapper}>
                 <p className={css.title}>Start <span>( Optional )</span></p>
                 {modeType === 'Create' || Editmode === 'Update' ?
                  <input type="date" name="" id="" /> :
                  <p className={css.startValue}> Start date </p>
              }
              </div>
              <div className={css.dueWrapper}>
                 <p className={css.title}>Due <span>( Optional )</span></p>
                 {modeType === 'Create' || Editmode === 'Update'  ?
                 <input type="date" name="" id="" /> :
                  <p className={css.dueValue}>
                    Due Value
                  </p>
                  }
              </div>
          </div>

          <div className={css.taskWrapper}>
              <div className={css.taskLegend}>
                  <p>To do's</p>
              </div>
              {
                taskList
              }
              { modeType === 'Create' || Editmode === 'Update' ?
              <p className={css.addNewTaskBtn} onClick={addNewTaskAction}>Add new task</p> :
              ''
              }
          </div>

          <div className={css.actionBtns}>
             <button className={css.cancelBtn} onClick={ Editmode === '' ? onCancel : DiscardChanges}>
               {Editmode === 'Update' ? 'Discard' : 'Cancel'}
             </button>
             {modeType === 'Create' ? (
                <button className={css.addBtn}>
                     Add
                </button>
                ) : Editmode === '' ? (
                        <button className={css.addBtn} onClick={UpdateMode}>
                             Edit
                        </button>
                    ) : Editmode === 'Update' ? (
                        <button className={css.addBtn} onClick={ActionSaveChanges}>
                         Save Changes
                        </button>
             ) : ''}
          </div>
       </div>
    </div>
  )
}

export default AddChecklistOverlay;