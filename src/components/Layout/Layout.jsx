import { Header } from "../header/Header";
import { NavBar } from "../NavBar/NavBar";
import { Outlet } from "react-router";
import { Box, Container } from "@mui/material";

export const Layout = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <NavBar />
        <Container
          component="main"
          maxWidth="xl"
          sx={{ py: 4, flexGrow: 1, textAlign: "start", margin: 0 }}
        >
          <Outlet />
        </Container>
      </Box>
    </>
  );
};
