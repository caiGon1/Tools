import { useState } from "react";
import Header from "./assets/components/Header.jsx";
import Wip from "./assets/components/Wip.jsx";
import Welcome from "./assets/components/Welcome.jsx";
import Weather from "./assets/components/Weather.jsx";
import TasksMng from "./assets/components/TasksMng.jsx";
import Calendario from "./assets/components/Calendario.jsx";


function App() {
  const [events, setEvents] = useState([]);
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
        <Calendario events={events} />
      </div>
      <Wip />
    </>
  );
}

export default App;
