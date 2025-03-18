import axios from "axios";
import { RequestError } from "../data/errors/RequestError";

export const Api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const result = error.response?.data;
    if (result) {
      if (result.success == false) {
        throw new RequestError({
          name: "API_RESPONSE_ERROR",
          message: result.message || "Something went wrong.",
          success: result.success,
          error: error,
        });
      } else {
        throw new RequestError({
          name: "UNKOWN_ERROR",
          message: result.title || "Unknown API error.",
          success: result.success,
          error: error,
        });
      }
    } else {
      throw new RequestError({
        name: "UNKOWN_ERROR",
        message: "Unexpected error.",
        success: false,
        error: error,
      });
    }
  }
);
