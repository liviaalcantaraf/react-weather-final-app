import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="Forecast-wrapper">
      <div className="WeatherForecast-day">{day()}</div>
      <div className="Forecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>

      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">{maxTemp()}</span>
        <span className="WeatherForecast-temperature-min">{minTemp()}</span>
      </div>
    </div>
  );
}
