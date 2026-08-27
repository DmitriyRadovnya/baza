import { ButtonGroup, Button } from "@mui/material";
import { topicList } from "../NavBar/topicList";

export const PageControl = ({ pages, toPrevPage, toNextPage }) => {
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
        disabled={pages.next > topicList.length ? true : false}
        sx={{ textTransform: "none" }}
      >
        След. тема
      </Button>
    </ButtonGroup>
  );
};
