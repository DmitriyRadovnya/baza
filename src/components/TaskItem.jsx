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
import { useRef, useState, useEffect } from "react";
import { useToDoAPI } from "../hooks/useToDoApi";

export const TaskItem = ({ task, setComplete, editTask, deleteTask }) => {
  const { removeTask, changeTaskStatus, updateTitle } = useToDoAPI();
  const [status, setStatus] = useState(task.completed);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const editInputRef = useRef();

  useEffect(() => {
    if (editMode) {
      editInputRef.current?.focus();
    }
  }, [editMode]);
  const handleComplete = async () => {
    try {
      const res = await changeTaskStatus(task.id);
      if (res.status === 200) {
        setComplete(task.id);
        setStatus((p) => !p);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditTask = async () => {
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
    try {
      setIsSaving(true);
      const status = await updateTitle(task.id, title.trim());
      if (status === 200) {
        editTask(task.id, title.trim());
        setEditMode(false);
        setError(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleEsc = (e) => {
    if (e.key === "Escape") {
      setEditMode(false);
      setError(null);
      setTitle(task.title);
    }
    if (e.key === "Enter") {
      handleEditTask();
    }
  };

  const handleRemoveTask = async () => {
    try {
      setIsLoading(true);
      const deleteStatus = await removeTask(task.id);
      if (deleteStatus === 204) {
        deleteTask(task.id);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickOut = (e) => {
    if (e.relatedTarget && e.relatedTarget.closest("input[type=checkbox]")) {
      return;
    }
    setEditMode(false);
    setError(null);
    setTitle(task.title);
  };

  const renderIcon = () => {
    if (isSaving) return <CircularProgress size={20} />;
    return editMode ? <SaveIcon /> : <EditIcon />;
  };

  return (
    <ListItem>
      <Checkbox checked={status} onChange={handleComplete} />
      {!editMode ? (
        <ListItemText sx={{ textDecoration: status ? "line-through" : "none" }}>
          {title}
        </ListItemText>
      ) : (
        <TextField
          inputRef={editInputRef}
          value={title}
          onChange={(e) => {
            setError(null);
            setTitle(e.target.value);
          }}
          onKeyDown={(e) => handleEsc(e)}
          onBlur={(e) => handleClickOut(e)}
          error={!!error}
          helperText={error}
          sx={{ flexGrow: 1 }}
        />
      )}

      <Checkbox
        checked={editMode}
        icon={renderIcon()}
        checkedIcon={renderIcon()}
        onChange={handleEditTask}
        onKeyDown={(e) => e.preventDefault()}
        disabled={isSaving}
      />
      <IconButton onClick={handleRemoveTask}>
        {isLoading ? <CircularProgress size={20} /> : <DeleteIcon />}
      </IconButton>
    </ListItem>
  );
};
