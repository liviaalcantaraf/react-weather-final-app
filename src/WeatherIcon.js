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
    "01d": <WiDaySunny size={60} color="#ffde74" />,
    "01n": <WiNightClear size={60} color="#ffde74" />,
    "02d": <WiDayCloudy size={60} color="#ffde74" />,
    "02n": <WiNightAltCloudy size={60} color="#ffde74" />,
    "03d": <WiCloud size={60} color="#ffde74" />,
    "03n": <WiNightCloudy size={60} color="#ffde74" />,
    "04d": <WiCloudy size={60} color="#ffde74" />,
    "04n": <WiCloudy size={60} color="#ffde74" />,
    "09d": <WiDayShowers size={60} color="#ffde74" />,
    "09n": <WiNightShowers size={60} color="#ffde74" />,
    "10d": <WiDayRainWind size={60} color="#ffde74" />,
    "10n": <WiNightAltRainWind size={60} color="#ffde74" />,
    "11d": <WiDayThunderstorm size={60} color="#ffde74" />,
    "11n": <WiNightThunderstorm size={60} color="#ffde74" />,
    "13d": <WiSnowflakeCold size={60} color="#ffde74" />,
    "13n": <WiSnowflakeCold size={60} color="#ffde74" />,
    "50d": <WiFog size={60} color="#ffde74" />,
    "50n": <WiFog size={60} color="#ffde74" />,
  };

  return codeMapping[props.code];
}
