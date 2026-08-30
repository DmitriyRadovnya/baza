import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useEffect, useState } from "react";

export const TaskItem = ({ task, setComplete, editTask, deleteTask }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [error, setError] = useState(null);
  const handleComplete = () => {
    setComplete(task.id);
  };

  const handleEditTask = () => {
    if (!editMode) {
      setTitle(task.title);
      setError(null);
      setEditMode(true);
      return;
    }

    if (!title.trim()) {
      setError("У задачи должно быть описание");
      return;
    }
    editTask(task.id, title.trim());
    setEditMode(false);
    setError(null);
  };

  return (
    <ListItem>
      <Checkbox checked={task.isDone} onChange={handleComplete} />
      {!editMode ? (
        <ListItemText
          sx={{ textDecoration: task.isDone ? "line-through" : "none" }}
        >
          {title}
        </ListItemText>
      ) : (
        <TextField
          value={title}
          onChange={(e) => {
            setError(null);
            setTitle(e.target.value);
          }}
          error={!!error}
          helperText={error}
          sx={{ flexGrow: 1 }}
        />
      )}

      <Checkbox
        checked={editMode}
        icon={<EditIcon />}
        checkedIcon={<SaveIcon />}
        onChange={handleEditTask}
      />
      <IconButton onClick={() => deleteTask(task.id)}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};
