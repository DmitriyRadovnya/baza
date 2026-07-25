import { useState } from "react";

export const SiblingComponent = () => {
  const [text, setText] = useState("TEXT");
  return (
    <>
      <h1>{text}</h1>
      <button onClick={() => setText("REDEV")}>Жми</button>
    </>
  );
};
