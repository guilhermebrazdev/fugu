import { Typography, TypographyProps, styled } from "@mui/material";

const truncatedTextProps = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: "inherit",
  width: "100%",
};

export const TruncatedText = styled(Typography)<TypographyProps>((props) => ({
  "&": {
    ...truncatedTextProps,
    color: props.color ?? truncatedTextProps.color,
  },
}));
