import { topicList } from "./topicList";
import { Grid } from "@mui/material";
import { NavButton } from "../shared/NavButton";

export const NavBar = ({ setCurrentPage }) => {
  return (
    <Grid
      container
      component="aside"
      spacing={1}
      columns={1}
      sx={{
        minWidth: 0.18,
        width: 0.18,
        maxHeight: 5,
        p: 1,
      }}
    >
      {topicList.map(({ id, name, link }) => (
        <Grid
          key={link}
          size={3}
          sx={{ m: 0 }}
          onClick={() => setCurrentPage(id)}
        >
          <NavButton to={link}>{name}</NavButton>
        </Grid>
      ))}
    </Grid>
  );
};
