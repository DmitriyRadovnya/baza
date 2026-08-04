import { memo } from "react";

export const CartItem = memo(({ id, title, count, deleteItem, addItem }) => {
  console.log("ререндер");
  return (
    <li>
      <span>{title}</span>
      <span>Кол-во: {count}</span>
      <button onClick={() => addItem(id)}>+1</button>
      <button onClick={() => deleteItem(id)}>Удалить</button>
    </li>
  );
});
