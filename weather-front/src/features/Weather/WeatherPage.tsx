import { womanImg } from "../../assets";
import { Box, Stack } from "@mui/material";
import { ResultBox } from "./components/ResultBox/ResultBox";
import { CitySearch } from "./components/CitySearch";
import { withWrappers } from "../../hocs/withWrappers";
import { WeatherProvider } from "./contexts/WeatherProvider";
import { useWeather } from "./hooks/useWeather";

const Page = () => {
  const { cityWeather, loading } = useWeather();

  return (
    <Stack height={"100%"} padding={2}>
      <Stack
        alignItems={"center"}
        justifyContent={"space-evenly"}
        flexDirection={{ md: "row" }}
        gap={1}
        height={"100%"}
      >
        <Box component={"img"} src={womanImg} width={"40%"} sx={{ maxWidth: 500, minWidth: 300 }} />
        <Stack
          width={"100%"}
          alignItems={"center"}
          border={"1px solid grey"}
          borderRadius={2}
          maxWidth={500}
          bgcolor={"grey.200"}
        >
          <CitySearch />
          <ResultBox cityWeather={cityWeather} loading={loading} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export const WeatherPage = withWrappers(WeatherProvider)(Page);
