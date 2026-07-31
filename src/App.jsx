import "./App.css";
import { useRef, useState } from "react";
import { List } from "./components/events/List";

function App() {
  const [array, setArray] = useState([]);
  const [value, setValue] = useState("");
  const [arrIds, setArrIds] = useState(0);
  const inputRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (value === "") return;
    setArray((prev) => {
      return [...prev, { value, id: arrIds }];
    });
    setArrIds((p) => p + 1);
    setValue("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Добавить в список</button>
      </form>
      <button onClick={() => inputRef.current.focus()}>Фокус на инпут</button>
      <List dataArr={array} />
    </>
  );
}

export default App;
