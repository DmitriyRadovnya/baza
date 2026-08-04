import { memo } from "react";

export const TaskItem = memo(({ item }) => {
  console.log("ререндер", item.split(" ")[0]);
  return <li>{item}</li>;
});
