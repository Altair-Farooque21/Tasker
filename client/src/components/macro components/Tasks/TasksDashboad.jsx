import React from 'react';
import css from '../../../styles/Tasks/TasksDashboad.module.css';
import person1 from "../../../assets/person1.jpg";
import person2 from "../../../assets/person2.jpg";
import person3 from "../../../assets/person3.jpg";

function TasksDashboad() {
  return (
    <div className={css.tdWrapper}>
        <div className={css.tdTopContainer}>
            <p className={css.tdTitlee}>
                Website Design
            </p>
            <p className={css.tdDuedate}>
                07 / 05 
            </p>
        </div>
        <div className={css.tdBtmContainer}>
            <div className={css.tdTeams}>
                {/* img stack of teams profile pics */}
                <img src={person1} alt="" width={30} />
                <img src={person2} alt="" width={30} />
                <img src={person3} alt="" width={34} />
                <p> +3 </p>
            </div>
            <div className={css.tdTasks}>
                  3 tasks Today
            </div>
        </div>
    </div>
  )
}

export default TasksDashboad;