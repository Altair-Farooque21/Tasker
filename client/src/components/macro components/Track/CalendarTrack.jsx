import React from 'react';
import css from "../../../styles/Track/CalendarTrack.module.css";


import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

function CalendarTrack() {
  return (
    <div>
      Calender
    </div>
  );
}

export default CalendarTrack;