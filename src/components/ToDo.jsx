import { useEffect, useState } from "react";
import { CreateTask } from "./CreateTask";
import { TaskList } from "./TaskList";
import { FilterControl } from "./FilterControl";
import { Box, Button } from "@mui/material";

export const ToDo = () => {
  const [filterMode, setFilterMode] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) setTasks(JSON.parse(savedTasks));
    } catch (e) {
      console.error(e);
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, hasLoaded]);

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

  const clearCompletedTasks = () => {
    setTasks((prev) => prev.filter((task) => !task.isDone));
  };

  return (
    <>
      <CreateTask addTask={addTask} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <FilterControl filterMode={filterMode} setFilterMode={setFilterMode} />
        <Button
          variant="contained"
          onClick={clearCompletedTasks}
          sx={{ textTransform: "none" }}
        >
          Удалить выполненные
        </Button>
      </Box>
      <TaskList
        tasks={tasks}
        filterMode={filterMode}
        setComplete={setComplete}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </>
  );
};
