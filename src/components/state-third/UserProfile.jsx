import { useCallback, useMemo, useState } from "react";
import { UserInfo } from "./UserInfo";

export const UserProfile = () => {
  const [{ name, age, isActive }, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  const [isEditForName, setIsEditForName] = useState(false);
  const [inputValue, setInputValue] = useState(name);
  const [count, setCount] = useState(0);

  const inputOnChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const changeName = () => {
    setIsEditForName((p) => !p);
    setUser((prev) => {
      return {
        ...prev,
        name: inputValue,
      };
    });
  };
  const increaseTheAge = () => {
    setUser((prev) => {
      return {
        ...prev,
        age: prev.age++,
      };
    });
  };
  const toggleActivity = () => {
    setUser((prev) => {
      return {
        ...prev,
        isActive: !prev.isActive,
      };
    });
  };

  return (
    <>
      <h5>Профиль пользователя</h5>
      <UserInfo
        name={name}
        age={age}
        isActive={isActive}
        mode={isEditForName}
        inputValue={inputValue}
        inputOnChange={inputOnChange}
      />
      <button onClick={() => setCount((p) => p + 1)}>Счетчик: {count}</button>
      <button onClick={changeName}>Сменить имя</button>
      <button onClick={increaseTheAge}>Увеличить возраст</button>
      <button onClick={toggleActivity}>Переключить активность</button>
    </>
  );
};
