import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt-br");
import { useState } from "react";

function Calendario({ events }) {
  const localizer = momentLocalizer(moment);

 return (
    <div style={{ height: '500px', padding: '20px', width: '75%', margin: '0 auto' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        // Define explicitamente as abas disponíveis
        views={['month', 'agenda']} 
        // Define a visão inicial sem travar o componente
        defaultView={Views.MONTH}
        // Garante que o clique nos botões funcione
        onView={(view) => console.log("Mudou para: ", view)}
        messages={{
          month: 'Mês',
          agenda: 'Agenda',
          today: 'Hoje',
          previous: 'Anterior',
          next: 'Próximo',
        }}
      />
    </div>
  );
}

export default Calendario;
