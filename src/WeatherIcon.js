import React from "react";
import { WiDaySunny } from "weather-icons-react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "WiDaySunny",
    "01n": "WiNightClear",
    "02d": "WiDayCloudy",
    "02n": "WiNightAltCloudy",
    "03d": "WiCloud",
    "03n": "WiNightCloudy",
    "04d": "WiCloudy",
    "04n": "WiCloudy",
    "09d": "WiDayShowers",
    "09n": "WiNightShowers",
    "10d": "WiDayRainWind",
    "10n": "WiNightAltRainWind",
    "11d": "WiDayThunderstorm",
    "11n": "WiNightThunderstorm",
    "13d": "WiSnowflakeCold",
    "13n": "WiSnowflakeCold",
    "50d": "WiFog",
    "50n": "WiFog",
  };

  return <WiDaySunny size={24} color="#000" />;
}
