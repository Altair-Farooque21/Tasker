import React from 'react';
import { Routes, Route } from 'react-router-dom';

import css from "../styles/DashBoard.module.css";
import NavMenuBar from './macro components/NavMenuBar';
import DashBoardContent from './macro components/DashBoardContent';
import Checklist from './Checklist';
import Tasks from './Tasks';
import Tracks from './Tracks';
import Notes from './Notes';


function DashBoard() {

  return (
    <div className={css.Container}>
        <NavMenuBar />
         <Routes>
            <Route path='/' element={<DashBoardContent />}/>
            <Route path='/projects' element={<Tasks />}/>
            <Route path='/notes' element={<Notes />}/>
            <Route path='/todos' element={<Checklist />}/>
            <Route path='/tracks' element={<Tracks />}/>
        </Routes>
    </div>
  )
}

export default DashBoard;