import { useState } from "react";

export const UserProfile = () => {
  const [{ name, age, isActive }, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  const [isEditForName, setIsEditForName] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };

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
      <p>
        Имя:{" "}
        {isEditForName ? (
          <input value={inputValue} onChange={inputOnChange} />
        ) : (
          name
        )}
      </p>
      <p>Возраст: {age}</p>
      <p>Активен: {isActive ? "Online" : "Offline"}</p>
      <button onClick={changeName}>Сменить имя</button>
      <button onClick={increaseTheAge}>Увеличить возраст</button>
      <button onClick={toggleActivity}>Переключить активность</button>
    </>
  );
};
