import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import App from "./App.tsx";
import GlobalStyles from "./GlobalStyles.ts";
import Theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <App />
      <ToastContainer />
    </ThemeProvider>
  </StrictMode>
);
