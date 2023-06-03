import React, { useState } from 'react';
import css from "../styles/Checklist.module.css";
import ChecklistCard from './macro components/Checklist/ChecklistCard';
import addFab from "../assets/plus.png";
import AddChecklistOverlay from './macro components/Checklist/AddChecklistOverlay';

function Checklist() {

  const [closeOverlay ,setCloseOverlay] = useState(false);
  const [openAddOverlay , setOpenAddOverlay] = useState(false);
  const [mode,setMode] = useState("Create");

  const ActionCloseOverlay = () =>{
    setCloseOverlay(!closeOverlay);
  }

  const ActionOpenCreateOverlay = () =>{
    setMode('Create')
    setCloseOverlay(!closeOverlay);
    setOpenAddOverlay(!openAddOverlay);
  }

  const ActionOpenCard = () =>{
        setMode("View");
        setCloseOverlay(!closeOverlay);
        setOpenAddOverlay(!openAddOverlay);
  }

  return (
    <div className={css.ChecklistContainer}>
       <div className={css.ChecklistWrapper}>
            {/* this is the  container grid for tasks */}
            <ChecklistCard cardClicked={ActionOpenCard}/>
       </div>

       <img className={css.AddFAB} src={addFab} alt="" width={56} color='white' onClick={ActionOpenCreateOverlay}/>

       <div className={`${css.addCheclistOverlay} ${openAddOverlay ? css.show : ''} ${!closeOverlay ? css.close : ''}`}>
            <AddChecklistOverlay onCancel = {ActionCloseOverlay} modeType = {mode} />
       </div>
    </div>
  )
}

export default Checklist;