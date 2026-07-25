import { useState } from "react";

export const GhostComponent = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Скрыть" : "Показать"}
      </button>
      {isVisible && <span>Бу</span>}
    </>
  );
};
