import React,{useState} from 'react';
import css from "../../../styles/Track/CalendarTrack.module.css";
import "../../../styles/Track/FullCalendarCustomStyles.css";


import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick


const Calevents = [
  {
    title: 'Event 1',
    start: '2023-05-15T10:00:00',
    end: '2023-05-17T12:00:00',
    color: '#8F43EE'
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

function CalendarTrack() {

  const [calendarEvents, setCalendarEvents] = useState(Calevents);

  const handleEventClick = (info) => {
    console.log(info.event);
  };

  const handledragEvents = (info) =>{
    const draggedEvent = info.event;
    const updatedEvent = { ...draggedEvent };
    // finding index
    const eventIndex = calendarEvents.findIndex(
      (event) => event.title === draggedEvent.title
    );
    // updating event
    if (eventIndex > -1) {
    const updatedEvents = [...calendarEvents];
    let color = updatedEvents[eventIndex].color;
    updatedEvents[eventIndex] = {
      title: draggedEvent.title,
      start: draggedEvent.start.toISOString(),
      end: draggedEvent.end.toISOString(),
      color:color
    };
    setCalendarEvents(updatedEvents);
    }
  }

  return (
    <div className={css.calendarConatienr}>
      <FullCalendar 
       plugins={[dayGridPlugin,interactionPlugin]}
       initialView='dayGridMonth'
       weekends = {true}
       events={calendarEvents}
       eventClick={handleEventClick}
       editable = {true}
       droppable = {true}
       eventDrop = {handledragEvents}
       selectable = {true}
       selectMirror = {true}
       />
    </div>
  );
}

export default CalendarTrack;