import React from "react";
import FormattedDate from "./FortmattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city-name mt-5">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="WeatherInfo-wrapper">
        <div className="row mt-5">
          <div className="col-6">
            <div className="clear-fix">
              <WeatherIcon code={props.data.icon} size={80} />
            </div>
            <div className="number-temperature">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
