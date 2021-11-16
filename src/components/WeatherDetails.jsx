import { useState, useEffect } from "react";

const WeatherDetails = ({temperature, maxTemp, minTemp, description, icon, wind, humidity}) => {
  const [ weatherColor, setWeatherColor] = useState("");
  
  // To set the background color depending on the weather description.
  useEffect(() => {
    if (description === "clear sky") {
      setWeatherColor("rgb(13, 178, 228)")
    }
    if (description === "few clouds") {
      setWeatherColor("rgb(134, 203, 224)")
    }
    if (description === "overcast clouds") {
      setWeatherColor("rgb(85, 118, 128)")
    }
    if (description === "scattered clouds") {
      setWeatherColor("rgb(142, 181, 196)")
    }
    if (description === "broken clouds") {
      setWeatherColor("rgb(122, 146, 155)")
    }
    if (description === "shower rain") {
      setWeatherColor("rgb(64, 82, 88)")
    }
    if (description === "rain") {
      setWeatherColor("rgb(93, 119, 128)")
    }
    if (description === "light rain") {
      setWeatherColor("rgb(117, 168, 185)")
    }
    if (description === "thunderstorm") {
      setWeatherColor("rgb(34, 54, 61)")
    }
    if (description === "snow") {
      setWeatherColor("rgb(214, 214, 214)")
    }
    if (description === "mist") {
      setWeatherColor("rgb(185, 185, 185)")
    }   
  }, [description]);
  
  return (
    <div className="info" style={{backgroundColor: weatherColor}}>
      <section className="details-container">
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather-icon"/>
        <p>{temperature}°C</p>
      </section>
      <section className="details-container">
        <p>{description.toUpperCase()}</p>
        <p>Max: {maxTemp}°C</p>
        <p>Min: {minTemp}°C</p>
        <p>Wind: {wind}km/h</p>
        <p>Humidity: {humidity}%</p>
      </section>
    </div>
  )
};

export default WeatherDetails