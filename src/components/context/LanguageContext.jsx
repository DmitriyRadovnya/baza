import { createContext, useState } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    const langs = ["en", "ru", "de", "es"];
    const curLangIndex = langs.indexOf(lang);
    const nextLangIndex = (curLangIndex + 1) % langs.length;
    setLang(langs[nextLangIndex]);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};
