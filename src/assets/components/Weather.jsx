import { useEffect, useState } from "react";
function Weather() {
    const [weather, setWeather] = useState(null);
    const [erro, setErro] = useState(false);
    
  function getLocaltion() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Not suported!");
    }
  }

  useEffect(() => {
    async function weatherSearch(position) {
      try {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=42b1d3e62eff899da17a18acc26fc850`
        );
        if (!response.ok) throw new Error("Erro na rede");

        const data = await response.json();
        // A API retorna um array [ {q: "...", a: "..."} ]
        setWeather(data.weather.main);
      } catch (error) {
        console.error("Weather error:", error);
        setErro(true);
      }
    }
    weatherSearch();
  }, []);
    
  return (
    <div>
      {!weather && !erro && (
        <p className="text-4xl font-extralight italic py-5">Loading...</p>
      )}

      {weather && (
        <p className="text-4xl font-extralight italic py-5">
          {weather}
        </p>
      )}
    </div>
  );
}
export default Weather;
