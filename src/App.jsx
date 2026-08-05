import "./App.css";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { UserProfile } from "./components/state-third/UserProfile";
import { TodoList } from "./components/state-third/TodoList";
import { ShoppingCart } from "./components/state-third/ShoppingCart";
import { GlobalStyles } from "./components/state-third/context/globalStyles";
import { lightTheme, darkTheme } from "./components/state-third/context/Themes";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <button onClick={themeToggler}>Изменить тему</button>
        <UserProfile />
        <TodoList />
        <ShoppingCart />
      </ThemeProvider>
    </>
  );
}

export default App;
