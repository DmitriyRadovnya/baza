import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export const CreateTask = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handleCreateTask = () => {
    addTask(value);
    setValue("");
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", justifyContent: "center", gap: 3, p: 2 }}
    >
      <TextField
        required
        size="small"
        label={"Новая задача"}
        placeholder="Опишите задачу"
        // helperText={"Error"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ textTransform: "none" }}
        onClick={handleCreateTask}
      >
        Добавить
      </Button>
    </Box>
  );
};
