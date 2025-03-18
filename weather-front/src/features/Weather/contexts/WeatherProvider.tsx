import { createContext, ReactNode, useState } from "react";
import { IWeather } from "../interfaces/IWeather";
import { fetchWeatherByCity } from "../services/weatherServices";
import toast from "react-hot-toast";

interface IProvider {
  children: ReactNode;
}

export interface WeatherContextData {
  cityWeather: IWeather | undefined | null;
  loading: boolean;
  loadCityWeather: (city: string) => Promise<void>;
}

export const weatherContext = createContext<WeatherContextData>({} as WeatherContextData);

export const WeatherProvider = ({ children }: IProvider) => {
  const [cityWeather, setCityWeather] = useState<IWeather | null>();
  const [loading, setLoading] = useState<boolean>(false);

  async function loadCityWeather(city: string) {
    if (city) {
      setLoading(true);
      const weatherByCityResult = await fetchWeatherByCity(city);

      if (weatherByCityResult) {
        setCityWeather(weatherByCityResult);
      } else {
        setCityWeather(null);
      }

      setLoading(false);
    } else {
      toast("Please enter a city name.", { id: "blankSearch", icon: "😊" });
    }
  }
  return (
    <weatherContext.Provider value={{ cityWeather, loading, loadCityWeather }}>{children}</weatherContext.Provider>
  );
};
