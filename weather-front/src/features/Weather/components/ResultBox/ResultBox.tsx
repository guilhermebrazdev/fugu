import { CircularProgress, Stack } from "@mui/material";
import { IconPlaceholder } from "./IconPlaceholder";
import { IWeather } from "../../interfaces/IWeather";
import { ErrorFallback } from "../../../../components/ErrorFallback";
import { WeatherDetails } from "./WeatherDetails";

interface ResultBoxProps {
  cityWeather: IWeather | undefined | null;
  loading: boolean;
}

export const ResultBox = ({ cityWeather, loading }: ResultBoxProps) => {
  if (loading) {
    return (
      <Stack width={"100%"} height={400} justifyContent={"center"} alignItems={"center"}>
        <CircularProgress size={100} />
      </Stack>
    );
  }

  if (cityWeather === null) {
    return (
      <Stack width={"100%"} height={400} justifyContent={"center"} alignItems={"center"}>
        <ErrorFallback message="Try again." />
      </Stack>
    );
  }

  if (cityWeather) {
    return (
      <Stack width={"100%"} height={400} overflow={"auto"}>
        <WeatherDetails cityWeather={cityWeather} />
      </Stack>
    );
  }

  return (
    <Stack width={"100%"} height={400} justifyContent={"center"}>
      <IconPlaceholder />
    </Stack>
  );
};
