import "./App.css";
import { ThemeProvider } from "./components/context/ThemeContext";
import { LanguageProvider } from "./components/context/LanguageContext";
import { UserProfile } from "./components/context/UserProfile";
import { Header } from "./components/context/Header";

function App() {
  return (
    <>
      <ThemeProvider>
        <LanguageProvider>
          <Header />
          <UserProfile />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
