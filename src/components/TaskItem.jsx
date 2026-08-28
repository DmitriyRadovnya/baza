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
import { useState } from "react";

export const TaskItem = ({ task, setComplete, editTask, deleteTask }) => {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(task.title);
  const handleComplete = () => {
    setComplete(task.id);
  };

  const handleEditTask = () => {
    setEditMode((prevMode) => !prevMode);
    if (editMode === true) editTask(task.id);
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
        <TextField value={title} onChange={(e) => setTitle(e.target.value)} />
      )}

      <Checkbox
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
