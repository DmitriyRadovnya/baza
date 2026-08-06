import { useEffect, useRef } from "react";

export const withRenderTracker = (Component) => {
  return (props) => {
    const count = useRef(0);

    useEffect(() => {
      count.current += 1;
      console.log(
        `Компонент ${Component.name} рендерился ${count.current} раз`,
      );
      console.log(Component);
    });
    return <Component {...props} />;
  };
};
