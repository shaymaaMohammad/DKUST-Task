import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";
import environment from "./environment";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./assets/locals/index";
i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: localStorage.getItem(environment.lang) || "ar",
  resources,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
