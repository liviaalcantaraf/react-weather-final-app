import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="Weather-number">
          <span className="temperature">{Math.round(props.celsius)}</span>
          <span className="unit">°C</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
