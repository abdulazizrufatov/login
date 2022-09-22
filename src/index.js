import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Lang } from "./languages/lang";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: Lang,
    lng: "uz",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
