import { Box, TextField, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useToDoAPI } from "../hooks/useToDoApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const CreateTask = () => {
  const { createTask } = useToDoAPI();
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const queryClient = useQueryClient();
  const addNewTask = useMutation({
    mutationFn: (title) => createTask(title),
    onSuccess: (res) => {
      if (res?.status === 201) {
        setValue("");
        setError(null);
        // queryClient.invalidateQueries({ queryKey: ["tasks"] });
        queryClient.setQueryData(["tasks"], (old) => [res.data, ...old]);
      }
    },
    onError: (error) => setError(error),
  });

  const handleCreateTask = async () => {
    if (!value.trim()) {
      setError("Опишите задачу");
      return;
    }
    addNewTask.mutate(value.trim());
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleCreateTask();
      }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        gap: 3,
        p: 2,
      }}
    >
      <TextField
        size="small"
        label={"Новая задача"}
        placeholder="Опишите задачу"
        error={Boolean(error)}
        helperText={error}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (error) setError(null);
        }}
      />
      <Button
        variant="contained"
        sx={{ textTransform: "none", position: "relative", minWidth: 100 }}
        onClick={handleCreateTask}
        disabled={addNewTask.isPending}
      >
        <span
          style={{ visibility: addNewTask.isPending ? "hidden" : "visible" }}
        >
          Добавить
        </span>

        {addNewTask.isPending && (
          <CircularProgress
            size={20}
            color="inherit"
            sx={{ position: "absolute" }}
          />
        )}
      </Button>
    </Box>
  );
};
