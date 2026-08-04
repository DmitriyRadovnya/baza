import { memo, useMemo } from "react";

export const ItemList = memo(({ data, inputValue }) => {
  console.log("Лист рендер");

  const filteredList = useMemo(() => {
    if (inputValue === "") return data;
    return data.filter(({ name }) => {
      return name.toLowerCase().includes(inputValue);
    });
  }, [inputValue]);

  if (filteredList.length === 0) {
    return <span>Такого пользователя нет</span>;
  }

  return (
    <ul>
      {filteredList.map(({ id, name, age, country }) => {
        return (
          <li key={id}>
            <span>{name}</span>
            <span>{age}</span>
            <span>{country}</span>
          </li>
        );
      })}
    </ul>
  );
});
