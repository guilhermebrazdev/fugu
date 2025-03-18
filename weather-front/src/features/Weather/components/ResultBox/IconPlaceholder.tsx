import { Box, Stack, Zoom } from "@mui/material";
import { earthSearch, rain, sunCloud } from "../../../../assets";

export const IconPlaceholder = () => {
  return (
    <Zoom in={true} timeout={{ enter: 400, exit: 400 }}>
      <Stack alignItems={"center"}>
        <Stack maxWidth={"100%"} flexDirection={"row"} gap={2}>
          <Box
            component={"img"}
            src={sunCloud}
            alt="sun"
            sx={{ width: { xs: 100, sm: 150, md: 200 } }}
            draggable="false"
          />
          <Box
            component={"img"}
            src={rain}
            alt="rain"
            sx={{ width: { xs: 100, sm: 150, md: 200 } }}
            draggable="false"
          />
        </Stack>
        <Box
          component={"img"}
          src={earthSearch}
          alt="earth"
          sx={{ width: { xs: 100, sm: 125, md: 150 } }}
          draggable="false"
        />
      </Stack>
    </Zoom>
  );
};
