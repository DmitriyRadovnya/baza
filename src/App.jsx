import "./App.css";
import { useCallback, useEffect, useState } from "react";
import { SearchInput } from "./components/optimization/SearchInput";
import { ItemList } from "./components/optimization/ItemList";
import { CounterButton } from "./components/optimization/CounterButton";
import { users } from "./components/optimization/users";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [userList, setUserList] = useState(users);

  const inputHandler = useCallback(
    (value) => {
      setInputValue(value);
    },
    [inputValue],
  );

  const buttonHandler = useCallback(() => {
    setCount((p) => p + 1);
  }, []);

  console.log("App рендер");

  return (
    <>
      <CounterButton count={count} setCount={buttonHandler} />
      <SearchInput inputValue={inputValue} inputHandler={inputHandler} />
      <ItemList data={userList} inputValue={inputValue} />
    </>
  );
}

export default App;
