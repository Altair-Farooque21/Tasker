import React from 'react';
import css from "./MenuItem.module.css";
import { Link } from 'react-router-dom';

function MenuItem(props) {
  return (
    <div className={css.itemWrapper}>
        <ion-icon name={props.icon}></ion-icon>
        <Link to ={props.to}><p>{props.name}</p></Link>
    </div>
  )
}

export default MenuItem;