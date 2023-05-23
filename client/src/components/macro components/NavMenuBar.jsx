import React, { useState } from 'react';
import css from "./NavMenuBar.module.css";
import MenuItem from '../micro components/MenuItem';
import MenuIcon from "../../assets/menu.png";

import { Link } from 'react-router-dom';

function NavMenuBar() {
  const [CloseSideBar , setCloseSideBar] = useState(false);

  const toggleMenuBar = () =>{
        setCloseSideBar(!CloseSideBar);
        console.log(CloseSideBar)
  }

  return (
    <div className={`${css.menuBarWrap} ${CloseSideBar ? css.CloseSideBar : ''}`}>
        <div className={`${!CloseSideBar ? css.ToggleBarWrap : css.closedToggleBarWrap}`}>
             <img className = {css.toggleBtn} src={MenuIcon} alt="" width ={20} height={22} onClick={toggleMenuBar}/>
             <p className={css.brand}>Task<span>er</span></p>
        </div>
        <div className={css.menuWrap}>
          <Link to='/dashboard'> <MenuItem  icon = 'grid-outline' name = "Dashboard" toggleBar = {CloseSideBar}/></Link>
          <Link to='/dashboard/tasks'> <MenuItem  icon = 'calendar-number-outline' name = "Projects" toggleBar = {CloseSideBar}/></Link>
          <Link to='/dashboard/notes'> <MenuItem  icon = 'document-text-outline' name = "Notes" toggleBar = {CloseSideBar}/></Link>
          <Link to='/dashboard/todos'> <MenuItem  icon = 'checkbox-outline' name = "Tasks" toggleBar = {CloseSideBar}/></Link>
          <Link to='/dashboard/tracks'> <MenuItem  icon = 'hourglass-outline' name = "Track" toggleBar = {CloseSideBar}/></Link>
          </div>
        <div className={`${!CloseSideBar ? css.modesWrap : css.closeModeWrap}`}>
            <ion-icon name="help-circle-outline"></ion-icon>
            <ion-icon name="sunny-outline"></ion-icon>
        </div>
    </div>
  )
}

export default NavMenuBar;