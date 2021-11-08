import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <input
                type="form-search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
              ></input>
            </div>
            <div className="col-6">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
              ></input>
            </div>
          </div>
          <h1 className="mt-3">{weatherData.city}</h1>
          <ul>
            <li>Friday 13:30</li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row mt-5">
            <div className="col-6">
              <div className="clear-fix">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  className="flot-left"
                />
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>{" "}
                <span className="unit">°C</span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "eced894402200c20c901ff2b763fcc81";

    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
