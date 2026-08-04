import { memo } from "react";

export const UserInfo = memo(
  ({ name, age, isActive, mode, inputValue, inputOnChange }) => {
    console.log("Ререндер");
    return (
      <>
        <p>
          Имя:{" "}
          {mode ? <input value={inputValue} onChange={inputOnChange} /> : name}
        </p>
        <p>Возраст: {age}</p>
        <p>Активен: {isActive ? "Online" : "Offline"}</p>
      </>
    );
  },
);
