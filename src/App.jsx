
import { useState, useEffect } from "react"; 
import Header from "./assets/components/Header.jsx";
import Wip from "./assets/components/Wip.jsx";
import Welcome from "./assets/components/Welcome.jsx";
import Weather from "./assets/components/Weather.jsx";
import TasksMng from "./assets/components/TasksMng.jsx";
import Calendario from "./assets/components/Calendario.jsx";

function App() {
  const [events, setEvents] = useState(() => {
    const savedEvents = localStorage.getItem("eventos_calendario");
    if (savedEvents) {
      const parsedEvents = JSON.parse(savedEvents);
      return parsedEvents.map((event) => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      }));
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("eventos_calendario", JSON.stringify(events));
  }, [events]);

  const handleAddEvent = (event) => {
    setEvents((prev) => [...prev, event]);
  };


  return (
    <>
      <Header />
      <div className="flex justify-center md:gap-75 md:items-start flex-col md:flex-row">
        <Welcome />
        <Weather />
      </div>
      <div>
        <TasksMng onCalendarClick={handleAddEvent} />
        <Calendario events={events} setEvents={setEvents} />
      </div>
      <Wip />
    </>
  );
}

export default App;
