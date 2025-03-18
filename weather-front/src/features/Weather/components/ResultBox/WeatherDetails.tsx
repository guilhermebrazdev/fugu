import { Stack, Zoom, Divider, Typography, Box } from "@mui/material";
import { IWeather } from "../../interfaces/IWeather";
import { ValueWithLabel } from "../../../../components/ValueWithLabel";

interface WeatherDetailsProps {
  cityWeather: IWeather;
}

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({ cityWeather }) => {
  return (
    <Zoom in={true} timeout={{ enter: 400, exit: 400 }}>
      <Stack width="100%" paddingX={2}>
        <Divider sx={{ marginBottom: 2 }} />

        <Stack flexDirection={"row"} justifyContent={"space-evenly"} alignItems={"center"}>
          <Typography variant="h5" textAlign="center" fontWeight="bold">
            {cityWeather.name}, {cityWeather.sys.country}
          </Typography>

          <Stack direction="row" justifyContent="center" alignItems="center" gap={1} marginBottom={2} flexWrap="wrap">
            {cityWeather.weather.map((condition) => (
              <Box key={condition.id} textAlign="center">
                <img src={`https://openweathermap.org/img/wn/${condition.icon}@2x.png`} alt={condition.description} />
                <Typography>{condition.main}</Typography>
                <Typography variant="caption">{condition.description}</Typography>
              </Box>
            ))}
          </Stack>
        </Stack>

        <Stack flexDirection={{ sm: "row" }} alignItems={{ xs: "center" }} justifyContent={{ sm: "space-between" }}>
          <Stack flexDirection="column" gap={2}>
            <ValueWithLabel label="Temperature">{cityWeather.main.temp}°C</ValueWithLabel>
            <ValueWithLabel label="Feels Like">{cityWeather.main.feels_like}°C</ValueWithLabel>
            <ValueWithLabel label="Min Temp">{cityWeather.main.temp_min}°C</ValueWithLabel>
            <ValueWithLabel label="Max Temp">{cityWeather.main.temp_max}°C</ValueWithLabel>
            <ValueWithLabel label="Pressure">{cityWeather.main.pressure} hPa</ValueWithLabel>
          </Stack>
          <Stack flexDirection="column" gap={2}>
            <ValueWithLabel label="Humidity">{cityWeather.main.humidity}%</ValueWithLabel>
            <ValueWithLabel label="Wind Speed">{cityWeather.wind.speed} m/s</ValueWithLabel>
            <ValueWithLabel label="Wind Direction">{cityWeather.wind.deg}°</ValueWithLabel>
            <ValueWithLabel label="Cloudiness">{cityWeather.clouds.all}%</ValueWithLabel>
            <ValueWithLabel label="Visibility">{cityWeather.visibility / 1000} km</ValueWithLabel>
          </Stack>
        </Stack>
      </Stack>
    </Zoom>
  );
};
