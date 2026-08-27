export const hoc = `import React, { useState, useEffect } from 'react';  

// Этот HOC принимает компонент и возвращает новый компонент  
const withLoading = (WrappedComponent) => {  
  return (props) => {  
    // Логика отображения состояния загрузки  
    const { isLoading, ...otherProps } = props;  

    // Если идет загрузка, возвращаем сообщение о загрузке  
    if (isLoading) {  
      return <div>Загрузка...</div>;  
    }  

    // Если загрузка завершилась, рендерим обернутый компонент  
    return <WrappedComponent {...otherProps} />;  
  };  
};  

// Пример обычного функционального компонента  
const MyComponent = ({ data }) => {  
  return <div>Данные: {data}</div>;  
};  

// Оборачиваем MyComponent в HOC  
const MyComponentWithLoading = withLoading(MyComponent);  

// Главный компонент приложения  
const App = () => {  
  const [isLoading, setIsLoading] = useState(true);  
  const [data, setData] = useState(null);  

  useEffect(() => {  
    // Симуляция загрузки данных  
    const timer = setTimeout(() => {  
      setIsLoading(false);  
      setData('Привет, мир!');  
    }, 2000);  

    // Чистка таймера при размонтировании  
    return () => clearTimeout(timer);  
  }, []);  

  return (  
    <div>  
      <h1>Пример HOC</h1>  
      <MyComponentWithLoading isLoading={isLoading} data={data} />  
    </div>  
  );  
};  

export default App;`;

export const prompts = [
  {
    id: 1,
    text: "Когда вы хотите разделить и повторно использовать логику между несколькими компонентами.",
  },
  {
    id: 2,
    text: "Для обертывания компонентов, чтобы предоставить им дополнительную функциональность, такую как аутентификация, обработка ошибок и т.д.",
  },
];
