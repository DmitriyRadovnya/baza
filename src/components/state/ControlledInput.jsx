import { useState } from "react";

export const ControlledInput = () => {
  const [value, setValue] = useState("");
  const valueOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input value={value} onChange={valueOnChange} />
      <span>{value}</span>
    </>
  );
};
