import { useEffect, useState } from "react";

function Weather() {
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const [weather, setWeather] = useState(null);
  const [temp, setTemp] = useState(null);
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
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric&lang=pt_br`
        );

        const data = await response.json();


        setWeather(data.weather[0].main);
        setTemp(Math.round(data.main.temp));
        console.log(API_KEY);
      } catch (error) {
        console.error(error);
        setErro(true);
      }
    }

    weatherSearch();
  }, [coords]);

  return (
    <div className="mt-16 md:mt-45 max-w-xl mx-auto md:mx-12 md:ml-60 px-2 text-center md:text-right">
      {!weather && !erro && (
        <p className="text-4xl font-extralight italic py-5">Loading...</p>
      )}

      {erro && <p className="text-4xl font-extralight italic py-5">Error on loading weather</p>}

      {weather && (
        <p className="text-4xl font-extralight italic py-5">
        The weather is: <p className="font-bold">{weather}.</p> Feels like <p className="font-bold">{temp}°C</p>
        </p>
      )}
    </div>
  );
}

export default Weather;
