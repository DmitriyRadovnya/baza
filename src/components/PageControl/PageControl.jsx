import { ButtonGroup, Button } from "@mui/material";

export const PageControl = ({ pages, toPrevPage, toNextPage }) => {
  const handlePagination = (direction) => {
    if (direction === "prev") {
      toPrevPage();
    }
    if (direction === "next") {
      toNextPage();
    }
    scroll(0, 0);
  };

  return (
    <ButtonGroup variant="text" sx={{ alignSelf: "center" }}>
      <Button
        onClick={() => handlePagination("prev")}
        disabled={pages.prev === null}
        sx={{ textTransform: "none" }}
      >
        Назад
      </Button>
      <Button
        onClick={() => handlePagination("next")}
        disabled={pages.next === null}
        sx={{ textTransform: "none" }}
      >
        Далее
      </Button>
    </ButtonGroup>
  );
};
