import { useState } from "react";
import { randomTask } from "../../utils/randomTask";

export const TodoList = () => {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

  const addTask = () => {
    setTasks((prev) => {
      return [...prev, randomTask()];
    });
  };

  const removeLastTask = () => {
    setTasks((prev) => {
      return prev.slice(0, prev.length - 1);
    });
  };

  return (
    <>
      <ul>
        {tasks.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <button onClick={addTask}>Добавить задачу</button>
      <button onClick={removeLastTask}>Удалить задачу</button>
    </>
  );
};
