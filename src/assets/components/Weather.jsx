import { useEffect, useState } from "react";

function Weather() {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
  const [weather, setWeather] = useState(null);
  const [erro, setErro] = useState(false);
  const [coords, setCoords] = useState(null);


  useEffect(() => {
    if (!navigator.geolocation) {
      setErro(true);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => setErro(true)
    );
  }, []);

  useEffect(() => {
    if (!coords) return; 

    async function weatherSearch() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric&lang=pt_br`
        );

        const data = await response.json();

        setWeather(data.current.weather[0].main);
      } catch (error) {
        console.error(error);
        setErro(true);
      }
    }

    weatherSearch();
  }, [coords]);

  return (
    <div>
      {!weather && !erro && (
        <p className="text-4xl font-extralight italic py-5">Loading...</p>
      )}

      {erro && <p className="text-4xl font-extralight italic py-5">Erro ao carregar clima</p>}

      {weather && (
        <p className="text-4xl font-extralight italic py-5">
          {weather}
        </p>
      )}
    </div>
  );
}

export default Weather;
