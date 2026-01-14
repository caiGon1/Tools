import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Header from "./assets/components/Header.jsx";
import Wip from "./assets/components/Wip.jsx";
import Welcome from "./assets/components/Welcome.jsx";
import Weather from "./assets/components/Weather.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <div className="flex justify-center md:gap-75 md:items-start flex-col md:flex-row">
      <Welcome />
      <Weather />
    </div>
    <Wip />
  </StrictMode>
);
