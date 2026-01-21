import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';


function Calendario() { 
    
const localizer = momentLocalizer(moment);
const [events, setEvents] = useState([
    {
      title: 'Tarefa 1',
      start: new Date(2026, 0, 21, 10, 0), // 21 Jan 2026, 10:00
      end: new Date(2026, 0, 21, 11, 0),
      desc: 'Descrição da tarefa 1'
    },
    {
      title: 'Tarefa 2',
      start: new Date(2026, 0, 22, 12, 0),
      end: new Date(2026, 0, 22, 13, 30),
      desc: 'Descrição da tarefa 2'
    }
  ]);

  return (
      <div style={{ height: 600, padding: 20 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%', width: '80%', justifySelf: 'center', boxShadow:' 0 5px 30px -12px black'}}
        tooltipAccessor={event => event.desc}
      />
    </div>
    );  
}


export default Calendario;