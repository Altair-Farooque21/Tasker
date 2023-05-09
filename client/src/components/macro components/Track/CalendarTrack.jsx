import React from 'react';
import css from "../../../styles/Track/CalendarTrack.module.css";


import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

function CalendarTrack() {

  const Calevents = [
    {
      title: 'Event 1',
      start: '2023-05-15T10:00:00',
      end: '2023-05-15T12:00:00',
    },
    {
      title: 'Event 4',
      start: '2023-05-15T10:00:00',
      end: '2023-05-15T13:00:00',
    },
    {
      title: 'Event 2',
      start: '2023-05-16T14:00:00',
      end: '2023-05-16T16:00:00',
    },
    {
      title: 'Event 3',
      start: '2023-05-17T09:00:00',
      end: '2023-05-17T11:00:00',
    },
  ];

  const handleEventClick = (info) => {
    console.log(info.event);
  };


  return (
    <div className={css.calendarConatienr}>
      <FullCalendar 
       plugins={[dayGridPlugin,interactionPlugin]}
       initialView='dayGridMonth'
       weekends = {true}
       events={Calevents}
       eventClick={handleEventClick} />
    </div>
  );
}

export default CalendarTrack;