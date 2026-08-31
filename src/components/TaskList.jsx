import { List } from "@mui/material";
import { TaskItem } from "./TaskItem";

export const TaskList = ({
  tasks,
  filterMode,
  setComplete,
  editTask,
  deleteTask,
}) => {
  const visibleTasks = tasks.filter((task) => {
    if (filterMode === "active") return !task.completed;
    if (filterMode === "complete") return task.completed;
    return true;
  });
  return (
    <List>
      {visibleTasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            setComplete={setComplete}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        );
      })}
    </List>
  );
};
