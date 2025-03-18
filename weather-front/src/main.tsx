import { StrictMode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { theme } from "./styles/mui-theme.ts";
import "./styles/index.css";

import App from "./App.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} containerClassName="toast-container" />
    </ThemeProvider>
  </StrictMode>
);
