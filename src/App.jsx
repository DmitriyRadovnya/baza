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

  return (
    <>
      <Header />
      <CreateTask />
      <FilterControl />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
