import React from "react";
import FormattedDate from "./FortmattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <li className="Formatted-date mt-2">
        <FormattedDate date={props.data.date} />
      </li>
      <h1 className="city-name mt-5">{props.data.city}</h1>

      <div className="WeatherInfo-wrapper mt-5">
        <div className="row mt-5">
          <div className="col-6">
            <div className="Weather-first-icon">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="number-temperature">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-6">
            <div className="Weather-id">
              <ul>
                <li className="text-capitalize">{props.data.description} </li>
                <li>
                  <i class="fas fa-wind"></i> {props.data.wind} km/h
                </li>
                <li>
                  <i class="fas fa-tint"></i> {props.data.humidity}%{"    "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
