import { Search } from "@mui/icons-material";
import { Stack, InputAdornment, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useWeather } from "../hooks/useWeather";

export const CitySearch = () => {
  const { loadCityWeather } = useWeather();
  const [currentCity, setCurrentCity] = useState<string>("");

  async function handleSearch(currentCity: string) {
    await loadCityWeather(currentCity);
  }

  return (
    <Stack
      flexDirection={"row"}
      width={"100%"}
      justifyContent={"space-evenly"}
      alignItems={"baseline"}
      padding={2}
      gap={{ xs: 2, md: 4 }}
    >
      <TextField
        name="search"
        label={"search"}
        placeholder="City name"
        fullWidth
        sx={{ marginTop: 1 }}
        value={currentCity}
        onChange={(newValue) => setCurrentCity(newValue.target.value)}
        onKeyDown={(key) => {
          if (key.key === "Enter") {
            handleSearch(currentCity);
          }
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          },
        }}
        size="small"
      />
      <Button onClick={() => handleSearch(currentCity)} variant="contained" sx={{ width: 80, height: 40 }}>
        Search
      </Button>
    </Stack>
  );
};
