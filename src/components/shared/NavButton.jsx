import { Button } from "@mui/material";
import { NavLink } from "react-router";

export const NavButton = ({ children, to }) => {
  return (
    <Button
      component={NavLink}
      to={to}
      variant="outlined"
      sx={{
        width: 1,
        textTransform: "none",
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateX(4px)",
        },
      }}
    >
      {children}
    </Button>
  );
};
