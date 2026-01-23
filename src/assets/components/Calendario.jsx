import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";


moment.locale("pt-br");
function Calendario({ events, setEvents }) {
  const localizer = momentLocalizer(moment);

  const handleSelectEvent = (event) => {
    const mensagem = `Deseja remover o evento "${event.title}"?`;
    
    if (window.confirm(mensagem)) {
      const novaLista = events.filter((e) => e.id !== event.id);
      setEvents(novaLista);
      
      alert("Evento removido com sucesso!");
    }
  };

  return (
    <div style={{ height: '500px', padding: '20px', width: '75%', margin: '0 auto' }}>
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