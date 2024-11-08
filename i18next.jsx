import { initReactI18next } from "react-i18next";

//Import all translation files
import English from "./src/Translation/English.json";
import Italian from "./src/Translation/Italian.json";
import Spanish from "./src/Translation/Spanish.json";
import i18next from "i18next";

const resources = {
  en: {
    translation: English,
  },
  esp: {
    translation: Spanish,
  },
  ita: {
    translation: Italian,
  },
};

i18next.use(initReactI18next).init({
  returnObjects: true,
  // debug: true,
  fallbackLng: "en",
  resources,
  lng: "en", //default language
});

export const getTranslationObject = (key) => {
  const t = i18next.getFixedT(i18next.language);
  return t(key, { returnObjects: true });
};

export default i18next;
