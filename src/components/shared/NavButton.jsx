import { Button } from "@mui/material";
import { memo } from "react";
import { NavLink } from "react-router";

export const NavButton = memo(({ children, to }) => {
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
});
