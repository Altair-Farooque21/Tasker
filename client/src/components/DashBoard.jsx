import React from 'react';
import { Routes, Route } from 'react-router-dom';

import css from "../styles/DashBoard.module.css";
import NavMenuBar from './macro components/NavMenuBar';
import DashBoardContent from './macro components/DashBoardContent';
import Tasks from './Tasks';
import Projects from './Projects';
import Tracks from './Tracks';
import Notes from './Notes';


function DashBoard() {

  return (
    <div className={css.Container}>
        <NavMenuBar />
         <Routes>
            <Route path='/' element={<DashBoardContent />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/notes' element={<Notes />}/>
            <Route path='/todos' element={<Tasks />}/>
            <Route path='/tracks' element={<Tracks />}/>
        </Routes>
    </div>
  )
}

export default DashBoard;