import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18next
  .use(initReactI18next) // passes i18n down to react
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debugger: true,
    fallbackLng: "en",
  });
