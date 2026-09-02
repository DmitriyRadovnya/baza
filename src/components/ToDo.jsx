import { useEffect, useState } from "react";
import { CreateTask } from "./CreateTask";
import { TaskList } from "./TaskList";
import { FilterControl } from "./FilterControl";
import { Box, Button, CircularProgress } from "@mui/material";
import { useToDoAPI } from "../hooks/useToDoApi";
import { Loader } from "./Loader";

export const ToDo = () => {
  const [filterMode, setFilterMode] = useState("all");
  const [tasks, setTasks] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);
  const { getTasks, removeTask } = useToDoAPI();
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const loadTasks = async () => {
      try {
        const response = await getTasks();
        if (response) setTasks(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
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

  const addTask = (data) => {
    setTasks((prev) => [
      ...prev,
      {
        ...data,
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
      setIsDeleting(true);
      try {
        const res = await removeTask(id);
        if (res === 204) {
          deleteTask(id);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsDeleting(false);
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
          sx={{ textTransform: "none", position: "relative", minWidth: 100 }}
          disabled={isDeleting}
        >
          <span style={{ visibility: isDeleting ? "hidden" : "visible" }}>
            Удалить выполненные
          </span>
          {isDeleting && (
            <CircularProgress
              size={20}
              color="inherit"
              sx={{ position: "absolute" }}
            />
          )}
        </Button>
      </Box>
      {isLoading ? (
        <Loader />
      ) : (
        <TaskList
          tasks={tasks}
          filterMode={filterMode}
          setComplete={setComplete}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      )}
    </>
  );
};
