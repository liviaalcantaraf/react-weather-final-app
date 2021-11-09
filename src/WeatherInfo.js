import react from "react";
import FormattedDate from "./FortmattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="mt-3">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-5">
        <div className="col-6">
          <div className="clear-fix">
            <img
              src={props.data.icon}
              alt={props.data.description}
              className="flot-left"
            />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>{" "}
            <span className="unit">°C</span>
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
  );
}
