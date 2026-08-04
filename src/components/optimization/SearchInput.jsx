import { memo } from "react";

export const SearchInput = memo(({ inputValue, inputHandler }) => {
  console.log("ИНПУТ рендер");
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => inputHandler(e.target.value.trim().toLowerCase())}
    />
  );
});
