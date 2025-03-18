import { Stack } from "@mui/material";
import { TopBar } from "./components/layout/TopBar";
import { WeatherPage } from "./features/Weather/WeatherPage";

function App() {
  return (
    <Stack width={"100vw"} height={"100vh"}>
      <TopBar />
      <Stack height={"100%"} overflow={"auto"}>
        <WeatherPage />
      </Stack>
    </Stack>
  );
}

export default App;
