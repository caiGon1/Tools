import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";


moment.locale("pt-br");
function Calendario({ events, setEvents }) {
  const localizer = momentLocalizer(moment);

  const handleSelectEvent = (event) => {
    const mensagem = `Deseja remover o evento "${event.title}"?`;
    if (!window.confirm(mensagem)) return;

    if (event?.id === undefined) {
      // fallback: identify the single event by title + exact start time
      setEvents(prev =>
        prev.filter(e => !(e.title === event.title && +new Date(e.start) === +new Date(event.start)))
      );
    } else {
      // normal case: use unique id
      setEvents(prev => prev.filter(e => e.id !== event.id));
    }

    alert("Evento removido com sucesso!");
  };

  return (
    <div style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.1)', height: '500px', padding: '20px', width: '75%', margin: '0 auto', marginBottom: '40px', borderRadius: '8px', backgroundColor: '#fff' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'agenda']} 
        defaultView={Views.MONTH}
        onView={(view) => console.log("Mudou para: ", view)}
        
        onSelectEvent={handleSelectEvent}
        
        messages={{
          month: 'Mês',
          agenda: 'Agenda',
          today: 'Hoje',
          previous: 'Anterior',
          next: 'Próximo',
          noEventsInRange: 'Não há eventos neste período.',
        }}
      />
    </div>
  );
}

export default Calendario;