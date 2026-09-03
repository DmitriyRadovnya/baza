import { useState } from "react";
import { CreateTask } from "./CreateTask";
import { TaskList } from "./TaskList";
import { FilterControl } from "./FilterControl";
import { Box, Button, CircularProgress } from "@mui/material";
import { useToDoAPI } from "../hooks/useToDoApi";
import { Loader } from "./Loader";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const ToDo = () => {
  const [filterMode, setFilterMode] = useState("all");
  const { getTasks, removeTask } = useToDoAPI();
  const queryClient = useQueryClient();

  const { data: tasks, isPending } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks().then((res) => res.data),
    initialData: [],
  });

  const clearCompleted = useMutation({
    mutationFn: async (ids) => {
      await Promise.all(ids.map((id) => removeTask(id)));
    },
    onSuccess: (_, ids) => {
      queryClient.setQueryData(["tasks"], (old) =>
        old.filter((task) => !ids.includes(task.id)),
      );
    },
  });

  const handleClearCompleted = () => {
    const taskForClear = tasks
      .filter((task) => task.completed)
      .map((task) => task.id);
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
