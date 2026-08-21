import { topicList } from "./topicList";
import { Box } from "@mui/material";
import { NavButton } from "../shared/NavButton";

export const NavBar = () => {
  return (
    <Box
      component="aside"
      sx={{
        width: "20%",
        p: 1,
        display: "flex",
        flexDirection: "columns",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      {topicList.map(({ name, link }) => (
        <NavButton key={link} to={link}>
          {name}
        </NavButton>
      ))}
    </Box>
  );
};
