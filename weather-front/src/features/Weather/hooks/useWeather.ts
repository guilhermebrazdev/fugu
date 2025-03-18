import { useContext } from "react";
import { weatherContext } from "../contexts/WeatherProvider";

export const useWeather = () => useContext(weatherContext);
