import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { topicList } from "../NavBar/topicList";

export const usePagination = () => {
  const [pages, setPages] = useState({ prev: null, current: 0, next: 1 });
  const navigate = useNavigate();

  const toNextPage = useCallback(() => {
    setPages((prev) => {
      return {
        prev: prev.current,
        current: prev.current + 1,
        next: prev.current + 2 > topicList.length ? null : prev.current + 2,
      };
    });
  }, []);
  const toPrevPage = useCallback(() => {
    setPages((prev) => {
      return {
        prev: prev.current - 2 < 1 ? null : prev.current - 2,
        current: prev.current - 1,
        next: prev.current,
      };
    });
  }, []);
  const setCurrentPage = useCallback((pageId) => {
    console.log("page", pageId - 1 || null);
    setPages({
      prev: pageId - 1 < 0 ? null : pageId - 1,
      current: pageId,
      next: pageId + 1 > topicList.length ? null : pageId + 1,
    });
  }, []);

  useEffect(() => {
    console.log(pages.current);
    if (pages.current === 0) {
      navigate("/");
    } else {
      const currentLink = topicList.find((item) => item.id === pages.current);
      navigate(currentLink?.link);
    }
  }, [pages]);

  return { pages, toPrevPage, toNextPage, setCurrentPage };
};
