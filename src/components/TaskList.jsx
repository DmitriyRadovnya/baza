import { List } from "@mui/material";
import { TaskItem } from "./TaskItem";

export const TaskList = ({ tasks, setComplete, editTask, deleteTask }) => {
  return (
    <List>
      {tasks.map((task) => {
        return (
          task.isVisible && (
            <TaskItem
              key={task.id}
              task={task}
              setComplete={setComplete}
              editTask={editTask}
              deleteTask={deleteTask}
            />
          )
        );
      })}
    </List>
  );
};
