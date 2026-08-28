import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { CreateTask } from "./components/CreateTask";
import { TaskList } from "./components/TaskList";
import { FilterControl } from "./components/FilterControl";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Купить хлеб",
      isDone: false,
    },
  ]);

  const addTask = (title) => {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        isDone: false,
      },
    ]);
  };

  const setComplete = (id) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  };

  const editTask = (id, newTitle) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <>
      <Header />
      <CreateTask addTask={addTask} />
      <FilterControl />
      <TaskList
        tasks={tasks}
        setComplete={setComplete}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
