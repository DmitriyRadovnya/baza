import { useState } from "react";
import { ChildComponent } from "./ChildComponent";
import { SiblingComponent } from "./SiblingComponent";

export const ParentComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <span>{counter}</span>
      <button onClick={() => setCounter((prev) => prev + 1)}>Увеличить</button>
      <button onClick={() => setCounter(0)}>Сбросить</button>
      <button onClick={() => setCounter(Math.round(Math.random() * 10))}>
        Случайное значение
      </button>
      <button
        disabled={!counter}
        onClick={() => setCounter((prev) => prev - 1)}
      >
        Уменьшить
      </button>
      <ChildComponent name={"Pasha"} count={counter} />
      <SiblingComponent />
    </>
  );
};
