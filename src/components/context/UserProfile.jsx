import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import { ThemeContext } from "./ThemeContext";
import t from "./translations";

const styles = {
  light: { background: "#f0f0f0", color: "#333", border: "1px solid #ccc" },
  dark: { background: "#222", color: "#fff", border: "1px solid #444" },
};

export const UserProfile = () => {
  const { lang } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ ...styles[theme], padding: "15px", marginTop: "10px" }}>
      {t[lang].profile}
    </div>
  );
};
