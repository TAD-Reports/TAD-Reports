import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </ContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
