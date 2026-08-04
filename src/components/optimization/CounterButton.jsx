import { memo } from "react";

export const CounterButton = ({ count, setCount }) => {
  console.log("BTN рендер");
  return <button onClick={setCount}>{count}</button>;
};
