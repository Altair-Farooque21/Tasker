import React from 'react';
import css from "../styles/Checklist.module.css";
import ChecklistCard from './macro components/Checklist/ChecklistCard';

function Checklist() {
  return (
    <div className={css.ChecklistContainer}>
       <div className={css.ChecklistWrapper}>
            {/* this is the  container grid for tasks */}
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
            <ChecklistCard />
       </div>
    </div>
  )
}

export default Checklist;