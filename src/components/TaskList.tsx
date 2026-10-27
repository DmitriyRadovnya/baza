import { List } from "@mui/material";
import { TaskItem } from "./TaskItem.js";
import { Task } from "../hooks/types.js";
import { FilterMode } from "./FilterControl.js";
import { FC } from "react";

export type TaskListProps = {
  tasks: Task[];
  filterMode: FilterMode;
};

export const TaskList: FC<TaskListProps> = ({ tasks, filterMode }) => {
  const visibleTasks = tasks.filter((task) => {
    if (filterMode === "active") return !task.completed;
    if (filterMode === "complete") return task.completed;
    return true;
  });
  return (
    <List>
      {visibleTasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </List>
  );
};
