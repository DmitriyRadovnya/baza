import { useState } from "react";
import { CreateTask } from "./CreateTask.js";
import { TaskList } from "./TaskList.js";
import { FilterControl, FilterMode } from "./FilterControl.js";
import { Box, Button, CircularProgress } from "@mui/material";
import { Loader } from "./Loader.js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToDoAPI } from "../hooks/useToDoApi.js";
import { Task } from "../hooks/types.js";

export const ToDo = () => {
  const [filterMode, setFilterMode] = useState<FilterMode>(FilterMode.ALL);
  const { getTasks, removeTask } = useToDoAPI();
  const queryClient = useQueryClient();

  const { data: tasks, isPending } = useQuery<Task[], Error>({
    queryKey: ["tasks"],
    queryFn: getTasks,
    initialData: [],
  });

  const clearCompleted = useMutation<void, Error, number[]>({
    mutationFn: async (ids) => {
      await Promise.all(ids.map((id: number) => removeTask(id)));
    },
    onSuccess: (_, ids) => {
      queryClient.setQueryData(["tasks"], (old: Task[]) =>
        old.filter((task) => !ids.includes(task.id)),
      );
    },
  });

  const handleClearCompleted = () => {
    const taskForClear = tasks
      .filter((task: Task) => task.completed)
      .map((task: Task) => task.id);
    if (taskForClear.length) clearCompleted.mutate(taskForClear);
  };

  return (
    <>
      <CreateTask />
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
          onClick={handleClearCompleted}
          sx={{ textTransform: "none", position: "relative", minWidth: 100 }}
          disabled={clearCompleted.isPending}
        >
          <span
            style={{
              visibility: clearCompleted.isPending ? "hidden" : "visible",
            }}
          >
            Удалить выполненные
          </span>
          {clearCompleted.isPending && (
            <CircularProgress
              size={20}
              color="inherit"
              sx={{ position: "absolute" }}
            />
          )}
        </Button>
      </Box>
      {isPending ? (
        <Loader />
      ) : (
        <TaskList tasks={tasks} filterMode={filterMode} />
      )}
    </>
  );
};
