import { useCallback, useState } from "react";
import { CartItem } from "./CartItem";

export const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const deleteCartItem = useCallback((idForDeletion) => {
    setCart((prev) => prev.filter((item) => item.id !== idForDeletion));
  }, []);

  const addToCart = useCallback((idToAdd) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id === idToAdd) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
    });
  }, []);

  const clearCart = () => setCart([]);

  if (cart.length > 0) {
    return (
      <>
        {
          <ul>
            {cart.map(({ id, title, count }) => (
              <CartItem
                key={id}
                id={id}
                title={title}
                count={count}
                deleteItem={deleteCartItem}
                addItem={addToCart}
              />
            ))}
          </ul>
        }
        <button onClick={clearCart}>Очистить корзину</button>
      </>
    );
  }
  return <h3>Корзина пуста</h3>;
};
