import { Header } from "../header/Header";
import { NavBar } from "../NavBar/NavBar";
import { Outlet } from "react-router";
import { Box } from "@mui/material";

export const Layout = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <NavBar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
