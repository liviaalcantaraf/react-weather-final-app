import React from "react";
import {
  WiDaySunny,
  WiNightClear,
  WiDayCloudy,
  WiNightAltCloudy,
  WiCloud,
  WiNightCloudy,
  WiCloudy,
  WiDayShowers,
  WiNightShowers,
  WiDayRainWind,
  WiNightAltRainWind,
  WiDayThunderstorm,
  WiNightThunderstorm,
  WiSnowflakeCold,
  WiFog,
} from "weather-icons-react";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": <WiDaySunny size={24} color="#000" />,
    "01n": <WiNightClear size={24} color="#000" />,
    "02d": <WiDayCloudy size={24} color="#000" />,
    "02n": <WiNightAltCloudy size={24} color="#000" />,
    "03d": <WiCloud size={24} color="#000" />,
    "03n": <WiNightCloudy size={24} color="#000" />,
    "04d": <WiCloudy size={24} color="#000" />,
    "04n": <WiCloudy size={24} color="#000" />,
    "09d": <WiDayShowers size={24} color="#000" />,
    "09n": <WiNightShowers size={24} color="#000" />,
    "10d": <WiDayRainWind size={24} color="#000" />,
    "10n": <WiNightAltRainWind size={24} color="#000" />,
    "11d": <WiDayThunderstorm size={24} color="#000" />,
    "11n": <WiNightThunderstorm size={24} color="#000" />,
    "13d": <WiSnowflakeCold size={24} color="#000" />,
    "13n": <WiSnowflakeCold size={24} color="#000" />,
    "50d": <WiFog size={24} color="#000" />,
    "50n": <WiFog size={24} color="#000" />,
  };

  return codeMapping[props.code];
}
