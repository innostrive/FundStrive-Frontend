import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const languages = [
    { code: "en", lang: "English" },
    { code: "ita", lang: "Italian" },
  ];
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div>
      <select
        value={i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="cursor-pointer"
      >
        {languages.map((lng) => (
          <option value={lng.code} key={lng.code}>
            {lng.lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
