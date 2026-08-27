import { Typography, AppBar, Toolbar, Box, Link } from "@mui/material";
import logo from "../../assets/react.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import { memo } from "react";

export const Header = memo(({ setCurrentPage }) => {
  return (
    <AppBar position="relative" color="transparent" sx={{ borderRadius: 2 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => setCurrentPage(0)}
        >
          <Box component="img" src={logo} alt="Логотип" sx={{ height: 40 }} />
        </Box>

        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            background: `linear-gradient(135deg, #1976d2, #9c27b0)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          React Notebook
        </Typography>

        <Link
          component="a"
          href="https://github.com/DmitriyRadovnya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </Link>
      </Toolbar>
    </AppBar>
  );
});
