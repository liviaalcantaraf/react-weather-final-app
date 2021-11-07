import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <input
              type="form-search"
              placeholder="Type a city..."
              className="form-control"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary"
            ></input>
          </div>
        </div>
        <h1>Lisbon</h1>
        <ul>
          <li>Friday 13:30</li>
          <li>Clear Sky</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="clear sky"
            />
            17°C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation 0%</li>
              <li>Humidity 33%</li>
              <li>Wind 11km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
