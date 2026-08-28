import { List } from "@mui/material";
import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </List>
  );
};
