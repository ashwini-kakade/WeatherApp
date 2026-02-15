import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import './WeatherApp.css'

export default function WeatherApp() {

  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    temp: 25,
    tempMin: 20,
    tempMax: 30,
    humidity: 60,
    feelsLike: 27,
    description: "clear sky",
    icon: "01d"
  });

  const updateWeatherInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-app">

      <h1>Weather App 🌦</h1>

      <SearchBox updateWeatherInfo={updateWeatherInfo} />
      <InfoBox weatherInfo={weatherInfo} />

    </div>
  );
}
