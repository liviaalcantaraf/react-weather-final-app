import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1 className="mt-3">Lisbon</h1>
        <ul>
          <li>Friday 13:30</li>
          <li>Clear Sky</li>
        </ul>
        <div className="row mt-5">
          <div className="col-6">
            <div className="clear-fix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="clear sky"
                className="flot-left"
              />
              <span className="temperature">17</span>{" "}
              <span className="unit">°C</span>
            </div>
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
