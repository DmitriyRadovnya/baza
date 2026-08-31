import { useEffect, useState } from "react";
import { CreateTask } from "./CreateTask";
import { TaskList } from "./TaskList";
import { FilterControl } from "./FilterControl";
import { Box, Button } from "@mui/material";
import { useToDoAPI } from "../hooks/useToDoApi";
import { idID } from "@mui/material/locale";

export const ToDo = () => {
  const [filterMode, setFilterMode] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { getTasks, removeTask } = useToDoAPI();

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await getTasks();
        if (response) setTasks(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    loadTasks();

    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks, hasLoaded]);

  const addTask = ({ id, title, completed }) => {
    setTasks((prev) => [
      ...prev,
      {
        id,
        title,
        completed,
        isVisible: true,
      },
    ]);
  };

  const setComplete = (id) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
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

  const clearCompletedTasks = async () => {
    const taskForClear = tasks.filter((task) => task.completed);
    taskForClear.forEach(async ({ id }) => {
      try {
        const res = await removeTask(id);
        if (res === 204) {
          deleteTask(id);
        }
      } catch (error) {
        console.log(error);
      }
    });
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
