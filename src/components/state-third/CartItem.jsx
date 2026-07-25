export const CartItem = ({ id, title, count, deleteItem, addItem }) => {
  return (
    <li>
      <span>{title}</span>
      <span>Кол-во: {count}</span>
      <button onClick={() => addItem(id)}>+1</button>
      <button onClick={() => deleteItem(id)}>Удалить</button>
    </li>
  );
};
