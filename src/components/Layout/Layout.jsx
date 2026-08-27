import { Header } from "../header/Header";
import { NavBar } from "../NavBar/NavBar";
import { PageControl } from "../PageControl/PageControl";
import { Outlet } from "react-router";
import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";

export const Layout = () => {
  const [page, setPage] = useState();
  useEffect(() => {
    const page = localStorage.getItem("pageNum");
    if (page) setPage(page);
    else setPage(0);
  }, []);
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
          <PageControl />
          <Outlet />
        </Container>
      </Box>
    </>
  );
};
