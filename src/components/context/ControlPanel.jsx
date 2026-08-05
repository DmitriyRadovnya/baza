import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { LanguageContext } from "./LanguageContext";

export const ControlPanel = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const { toggleLang } = useContext(LanguageContext);

  return (
    <>
      <button onClick={toggleTheme}>Сменить тему</button>
      <button onClick={toggleLang}>Сменить язык</button>
    </>
  );
};
