import { useState } from "react";

export const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  const addFive = () => {
    setCount(() => {
      return count + 5;
    });
  };
  return (
    <>
      <span>{count}</span>
      <button onClick={addFive}>Нажми меня!</button>
    </>
  );
};
