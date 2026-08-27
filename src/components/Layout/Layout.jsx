import { Header } from "../header/Header";
import { NavBar } from "../NavBar/NavBar";
import { PageControl } from "../PageControl/PageControl";
import { Outlet } from "react-router";
import { Box, Container } from "@mui/material";
import { usePagination } from "../usePagination/usePagination";

export const Layout = () => {
  const { pages, toPrevPage, toNextPage, setCurrentPage } = usePagination();
  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      <Box sx={{ display: "flex" }}>
        <NavBar setCurrentPage={setCurrentPage} />
        <Container
          component="main"
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: "column",
            py: 4,
            flexGrow: 1,
            textAlign: "start",
            margin: 0,
          }}
        >
          <Outlet />
          <PageControl
            pages={pages}
            toPrevPage={toPrevPage}
            toNextPage={toNextPage}
          />
        </Container>
      </Box>
    </>
  );
};
