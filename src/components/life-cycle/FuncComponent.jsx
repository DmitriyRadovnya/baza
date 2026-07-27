import { useState, useEffect } from "react";
import { login } from "../../utils/login";

export const FuncComponent = ({ userData }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const loginFn = async () => {
      try {
        const response = await login(userData);

        if (!response.access_token) {
          throw new Error("Ошибка логина");
        }
        console.log("Токен получен");
      } catch (error) {
        console.log(error);
      }
    };

    loginFn();

    return () => {
      console.log("Func компонент размонтирован");
    };
  }, []);

  useEffect(() => {
    if (count % 2 === 0) {
      console.log("Счетчик - четный, поэтому видим это сообщение: ", count);
    }
  }, [count]);

  return (
    <>
      <span>{count % 2 === 0 ? count : count - 1}</span>
      <button onClick={() => setCount((p) => p + 1)}>+++Func+++</button>
    </>
  );
};
