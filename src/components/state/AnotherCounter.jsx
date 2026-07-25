import { useState } from "react";

export const AnotherCounter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <span>{count}</span>
      <button onClick={increment}>+1</button>
    </>
  );
};
