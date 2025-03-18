import { Fade, Stack, Typography, Zoom } from "@mui/material";
import { errorBot } from "../assets";

interface ErrorFallbackProps {
  title?: string;
  message?: string;
}

export const ErrorFallback = ({
  title = "Something went wrong...",
  message = "Try again later.",
}: ErrorFallbackProps) => {
  return (
    <Stack
      padding={2}
      gap={2}
      alignItems={"center"}
      textAlign={"center"}
      justifyContent={"center"}
      maxWidth={"480px"}
      margin={"auto"}
      height={"100%"}
    >
      <Zoom in={true} timeout={{ enter: 400, exit: 400 }}>
        <img src={errorBot} alt="Error" width={"70%"} draggable="false" />
      </Zoom>
      <Fade in={true} timeout={{ enter: 600, exit: 600 }}>
        <Stack gap={1}>
          <Typography variant="h5">{title}</Typography>
          <Typography fontWeight={300} color={"grey.700"}>
            {message}
          </Typography>
        </Stack>
      </Fade>
    </Stack>
  );
};
