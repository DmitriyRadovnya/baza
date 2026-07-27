import { useState } from "react";

export const DogControl = ({
  defaultCount,
  changeCount,
  changeUpdateCount,
}) => {
  const [count, setCount] = useState(defaultCount);

  const inputControl = (e) => setCount((p) => e.target.value);
  const updateDogList = () => {
    changeCount(count);
    changeUpdateCount((p) => p + 1);
  };

  return (
    <div>
      <span>Показать</span>
      <input
        value={count}
        min={1}
        max={50}
        type="number"
        onChange={inputControl}
      />
      <button onClick={updateDogList}>Обновить</button>
    </div>
  );
};
