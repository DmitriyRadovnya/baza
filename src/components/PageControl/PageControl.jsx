import { ButtonGroup, Button } from "@mui/material";
import { topicList } from "../NavBar/topicList";
import { usePagination } from "../usePagination/usePagination";

export const PageControl = () => {
  const [pages, toPrevPage, toNextPage] = usePagination();

  return (
    <ButtonGroup variant="text">
      <Button
        onClick={toPrevPage}
        disabled={pages.prev < 1 ? true : false}
        sx={{ textTransform: "none" }}
      >
        Пред. тема
      </Button>
      <Button
        onClick={toNextPage}
        disabled={pages.next > 15 ? true : false}
        sx={{ textTransform: "none" }}
      >
        След. тема
      </Button>
    </ButtonGroup>
  );
};
