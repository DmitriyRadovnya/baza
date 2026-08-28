import "./App.css";
import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { CreateTask } from "./components/CreateTask";
import { TaskList } from "./components/TaskList";
import { FilterControl } from "./components/FilterControl";

function App() {
  const [filterMode, setFilterMode] = useState("all");
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Купить хлеб",
      isDone: false,
      isVisible: true,
    },
  ]);

  useEffect(() => {
    if (filterMode === "all") {
      setTasks((prev) =>
        prev.map((task) => {
          return { ...task, isVisible: true };
        }),
      );
    }
    if (filterMode === "active") {
      setTasks((prev) =>
        prev.map((task) =>
          !task.isDone
            ? { ...task, isVisible: true }
            : { ...task, isVisible: false },
        ),
      );
    }
    if (filterMode === "complete") {
      setTasks((prev) =>
        prev.map((task) =>
          task.isDone
            ? { ...task, isVisible: true }
            : { ...task, isVisible: false },
        ),
      );
    }
  }, [filterMode]);

  const addTask = (title) => {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title,
        isDone: false,
        isVisible: true,
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
      <FilterControl filterMode={filterMode} setFilterMode={setFilterMode} />
      <TaskList
        tasks={tasks}
        filterMode={filterMode}
        setComplete={setComplete}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </>
  );
}

export default App;
