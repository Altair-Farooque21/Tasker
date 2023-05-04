import React from 'react';
import css from "./NavMenuBar.module.css";
import MenuItem from '../micro components/MenuItem';


function NavMenuBar() {
  return (
    <div className={css.menuBarWrap}>
        <div className={css.toggleBarWrap}>
            <ion-icon name="menu-outline"></ion-icon>
            <p className={css.brand}>Task<span>er</span></p>
        </div>
        <div className={css.menuWrap}>
            <MenuItem to='/dashboard' icon = 'grid-outline' name = "Dashboard" />
            <MenuItem to='/dashboard/tasks' icon = 'calendar-number-outline' name = "Tasks" />
            <MenuItem to='/dashboard/notes' icon = 'document-text-outline' name = "Notes" />
            <MenuItem to='/dashboard/todos' icon = 'checkbox-outline' name = "To-do's" />
            <MenuItem to='/dashboard/tracks' icon = 'hourglass-outline' name = "Track" />
        </div>
        <div className={css.modesWrap}>
            <ion-icon name="help-circle-outline"></ion-icon>
            <ion-icon name="sunny-outline"></ion-icon>
        </div>
    </div>
  )
}

export default NavMenuBar;