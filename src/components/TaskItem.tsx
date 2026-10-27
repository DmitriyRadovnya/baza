import {
  Checkbox,
  CircularProgress,
  IconButton,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { useRef, useState, useEffect, FC } from "react";
import { useTaskItem } from "../hooks/useTaskItem.js";
import { Task } from "../hooks/types.js";
import type { FocusEvent, KeyboardEvent } from "react";

type TaskItemProps = {
  task: Task;
};

export const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const { renameTask, changeStatus, deleteTask } = useTaskItem();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(task.title);
  const [error, setError] = useState<string | null>(null);
  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTitle(task.title);
    setError(null);
  }, [task.id, task.title]);

  useEffect(() => {
    if (editMode) {
      editInputRef.current?.focus();
    }
  }, [editMode]);
  const handleComplete = () => changeStatus.mutate(task.id);

  const exitEdit = () => {
    setEditMode(false);
    setTitle(task.title);
    setError(null);
  };

  const saveEdit = () => {
    const trimmed = title.trim();
    if (!trimmed) {
      setError("У задачи должно быть описание");
      return;
    }
    renameTask.mutate({ id: task.id, newTitle: trimmed });
    exitEdit();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveEdit();
    } else if (e.key === "Escape") {
      exitEdit();
    }
  };

  const handleClickOut = (
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>,
  ) => {
    if (
      e.relatedTarget &&
      e.relatedTarget.closest("button, input[type=checkbox]")
    ) {
      return;
    }
    exitEdit();
  };

  return (
    <ListItem>
      <Checkbox checked={task.completed} onChange={handleComplete} />
      {!editMode ? (
        <ListItemText
          sx={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.title}
        </ListItemText>
      ) : (
        <TextField
          inputRef={editInputRef}
          value={title}
          onChange={(e) => {
            setError(null);
            setTitle(e.target.value);
          }}
          onKeyDown={(e) => handleKeyDown(e)}
          onBlur={(e) => handleClickOut(e)}
          error={!!error}
          helperText={error}
          sx={{ flexGrow: 1 }}
        />
      )}

      <IconButton onClick={() => (editMode ? saveEdit() : setEditMode(true))}>
        {renameTask.isPending && editMode ? (
          <CircularProgress size={20} />
        ) : editMode ? (
          <SaveIcon />
        ) : (
          <EditIcon />
        )}
      </IconButton>
      <IconButton onClick={() => deleteTask.mutate(task.id)}>
        {deleteTask.isPending ? <CircularProgress size={20} /> : <DeleteIcon />}
      </IconButton>
    </ListItem>
  );
};
