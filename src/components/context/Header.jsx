import { useContext } from "react";
import t from "./translations";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import { ControlPanel } from "./ControlPanel";

const styles = {
  light: { background: "#f0f0f0", color: "#333" },
  dark: { background: "#222", color: "#fff" },
};

export const Header = () => {
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <header
      style={{
        background: styles[theme].background,
        color: styles[theme].color,
        padding: "20px",
      }}
    >
      <span>{t[lang].welcome}</span>
      <ControlPanel />
    </header>
  );
};
