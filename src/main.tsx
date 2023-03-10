import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { I18nextProvider } from "react-i18next";
import { ThemesProvider, PomodoroProvider } from "./context";

import Router from "./router";

import "./styles/index.css";
import i18n from "./translation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <ThemesProvider>
          <PomodoroProvider>
            <Router />
          </PomodoroProvider>
        </ThemesProvider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
