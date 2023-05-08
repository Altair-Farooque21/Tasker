import React from 'react';
import css from "../styles/Track.module.css";
import CalendarTrack from './macro components/Track/CalendarTrack';

function Tracks() {
  return (
    <div className={css.trackWrapper}>
        <CalendarTrack />
    </div>
  )
}

export default Tracks;