import { Box, TextField, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useToDoAPI } from "../hooks/useToDoApi";

export const CreateTask = ({ addTask }) => {
  const { createTask } = useToDoAPI();
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateTask = async () => {
    if (!value.trim()) {
      setError("Опишите задачу");
      return;
    }
    try {
      setIsLoading(true);
      const res = await createTask(value.trim());
      if (res.status === 201) {
        setError(null);
        addTask(res.data);
        setValue("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
        disabled={isLoading}
      >
        <span style={{ visibility: isLoading ? "hidden" : "visible" }}>
          Добавить
        </span>

        {isLoading && (
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
