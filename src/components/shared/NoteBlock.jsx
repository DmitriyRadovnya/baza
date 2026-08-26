import {
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LabelTwoToneIcon from "@mui/icons-material/LabelTwoTone";
import { SectionTitle } from "./SectionTitle";

export const NoteBlock = ({ title, items }) => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <SectionTitle icon="📢">{title}</SectionTitle>
      <List>
        {items.map(({ id, text }) => (
          <ListItem key={id}>
            <ListItemIcon>
              <LabelTwoToneIcon />
            </ListItemIcon>
            <ListItemText>{text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
