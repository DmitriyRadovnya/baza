import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

export const CreateTask = () => {
  const [value, setValue] = useState("");
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
      <Button variant="contained" sx={{ textTransform: "none" }}>
        Добавить
      </Button>
    </Box>
  );
};
