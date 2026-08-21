import { Button } from "@mui/material";
import { NavLink } from "react-router";

export const NavButton = ({ children, to }) => {
  return (
    <Button component={NavLink} to={to} variant="outlined" sx={{ width: 1 }}>
      {children}
    </Button>
  );
};
