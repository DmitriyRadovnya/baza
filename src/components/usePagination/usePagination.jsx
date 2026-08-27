import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { topicList } from "../NavBar/topicList";

export const usePagination = () => {
  const [pages, setPages] = useState({ prev: null, current: 0, next: 1 });
  const navigate = useNavigate();

  const toNextPage = () => {
    setPages((prev) => {
      return {
        prev: prev.current,
        current: prev.current + 1,
        next: prev.current + 2,
      };
    });
  };
  const toPrevPage = () => {
    setPages((prev) => {
      return {
        prev: prev.current - 2,
        current: prev.current - 1,
        next: prev.current,
      };
    });
  };
  const setCurrentPage = (pageId) => {
    setPages({
      prev: pageId - 1 || null,
      current: pageId,
      next: pageId + 1 < topicList.length ? pageId + 1 : null,
    });
  };

  useEffect(() => {
    console.log(pages.current);
    if (pages.current === 0) {
      navigate("/");
    }
    const currentLink = topicList.find((item) => item.id === pages.current);
    navigate(currentLink?.link);
  }, [pages]);

  return { pages, toPrevPage, toNextPage, setCurrentPage };
};
