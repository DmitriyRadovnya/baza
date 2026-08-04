import { useState } from "react";
import { TaskItem } from "./TaskItem";
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
          <TaskItem key={i} item={item} />
        ))}
      </ul>
      <button onClick={addTask}>Добавить задачу</button>
      <button onClick={removeLastTask}>Удалить задачу</button>
    </>
  );
};
