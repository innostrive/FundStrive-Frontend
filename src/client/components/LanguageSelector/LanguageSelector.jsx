import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const languages = [
    { code: "en", lang: "English" },
    { code: "esp", lang: "Spanish" },
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
        className="cursor-pointer border border-secondary text-secondary rounded-md text-sm"
      >
        {languages.map((lng) => (
          <option value={lng.code} key={lng.code} className="text-secondary">
            {lng.lang}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
