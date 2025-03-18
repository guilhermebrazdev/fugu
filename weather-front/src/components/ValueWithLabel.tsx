import { Typography } from "@mui/material";
import { ReactNode } from "react";

interface ValueWithLabelProps {
  children: ReactNode;
  label: string;
  textChildren?: boolean;
}

export const ValueWithLabel = ({ children, label }: ValueWithLabelProps) => {
  return (
    <Typography>
      <span style={{ fontWeight: 600 }}>{label}:</span> {children}
    </Typography>
  );
};
