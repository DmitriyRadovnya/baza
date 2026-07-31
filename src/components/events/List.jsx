import { useRef } from "react";

export const List = ({ dataArr }) => {
  const ref = useRef(null);
  const changeValue = () => {
    const newValue = ref.current.innerText + "!";
    ref.current.innerText = newValue;
  };

  return (
    <ul>
      {dataArr.map(({ id, value }) => {
        return (
          <li key={id}>
            <span ref={ref}>{value}</span>
            <button onClick={changeValue}>Добавить "!"</button>
          </li>
        );
      })}
    </ul>
  );
};
