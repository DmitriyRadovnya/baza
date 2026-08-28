import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

export const TaskList = ({ tasks }) => {
  return (
    <List>
      {tasks.map((task) => {
        return (
          <ListItem key={task.id}>
            <Checkbox />
            <ListItemText>{task.title}</ListItemText>
            <Checkbox icon={<EditIcon />} checkedIcon={<SaveIcon />} />
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};
