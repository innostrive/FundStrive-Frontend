import { initReactI18next } from "react-i18next";

//Import all translation files
import English from "./src/Translation/English.json";
import Italian from "./src/Translation/Italian.json";
import i18next from "i18next";

const resources = {
  en: {
    translation: English,
  },
  ita: {
    translation: Italian,
  },
};

i18next.use(initReactI18next).init({
  debug: true,
  retrunObjects: true,
  fallbackLng: "en",
  resources,
  lng: "en", //default language
});

export default i18next;
