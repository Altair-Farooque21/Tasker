import React from 'react';
import css from "./DashboardTrack.module.css";

function DashboardTrack() {
  return (
    <div className={css.container}>
        <div className={css.tp}>
            <p className={css.Name}>
                Total Projects
            </p>
            <p className={css.Value}>
                    7
            </p>
            <span></span>
        </div>
        <div className={css.cp}>
            <p className={css.Name}>
                Completed
            </p>
            <p className={css.Value}>
                    1
            </p>
            <span></span>
        </div>
        <div className={css.ip}>
            <p className={css.Name}>
                In-progress
            </p>
            <p className={css.Value}>
                    6
            </p>
            <span></span>
        </div>
        <div className={css.od}>
            <p className={css.Name}>
                Overdue
            </p>
            <p className={css.Value}>
                    0
            </p>
            <span></span>
        </div>
    </div>
  )
}

export default DashboardTrack;