import { topicList } from "./topicList";
import { Box, Grid } from "@mui/material";
import { NavButton } from "../shared/NavButton";

export const NavBar = () => {
  return (
    <Grid
      container
      component="aside"
      spacing={1}
      columns={1}
      sx={{
        width: 0.18,
        maxHeight: 5,
        p: 1,
      }}
    >
      {topicList.map(({ name, link }) => (
        <Grid key={link} size={3} sx={{ m: 0 }}>
          <NavButton to={link}>{name}</NavButton>
        </Grid>
      ))}
    </Grid>
  );
};
