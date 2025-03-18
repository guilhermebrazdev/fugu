import { ResponseData } from "../../../data/models/ResponseData";
import { Api } from "../../../libs/ApiClient";
import toast from "react-hot-toast";
import { IWeather } from "../interfaces/IWeather";

export const fetchWeatherByCity = async (city: string) => {
  try {
    const result: ResponseData<IWeather> = await Api.get(`weather/${city}`);

    return result.data;
  } catch (ex: unknown) {
    const errorMessage = ex instanceof Error ? ex.message : "Untraceable error.";

    toast.error(errorMessage, { id: "fetchWeatherByCityError" });
  }
};
