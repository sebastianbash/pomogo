import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";

import { ThemesProvider } from "./context/ThemeContext";

import Router from "./router";

import "./styles/index.css";
import i18n from "./translation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemesProvider>
        <I18nextProvider i18n={i18n}>
          <Router />
        </I18nextProvider>
      </ThemesProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
