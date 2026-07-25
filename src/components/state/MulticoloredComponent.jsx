import { useState } from "react";
import { randomColor } from "../../utils/changeColor";

export const MulticoloredComponent = () => {
  const [color, setColor] = useState("green");

  const changeColor = () => {
    setColor(randomColor());
  };

  return (
    <>
      <h1 style={{ color: color }}>Текст</h1>
      <button onClick={changeColor}>Change color</button>
    </>
  );
};
