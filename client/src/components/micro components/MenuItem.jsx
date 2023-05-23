import React from 'react';
import css from "./MenuItem.module.css";

function MenuItem(props) {
  return (
    <div className={`${!props.CloseSideBar ? css.shrinkWrapper :  css.itemWrapper }`}>
        <ion-icon name={props.icon}></ion-icon>
        <p className = {css.menuLink}>{props.name}</p>
    </div>
  )
}

export default MenuItem;