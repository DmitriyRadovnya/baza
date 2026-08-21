import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import logo from "../../assets/react.svg";
import { useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" color="transparent" sx={{ borderRadius: 2 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <Box component="img" src={logo} alt="Логотип" sx={{ height: 40 }} />
        </Box>

        <Button
          // color="inherit"
          variant="outlined"
          // onClick={() => navigate("/about")}
          sx={{ textTransform: "none" }}
        >
          О нас
        </Button>
      </Toolbar>
    </AppBar>
  );
};
