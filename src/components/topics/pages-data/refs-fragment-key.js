export const refs = `import React, { useRef } from 'react';  

const InputFocus = () => {  
  // Создаем реф с помощью useRef  
  const inputRef = useRef(null);  

  const focusInput = () => {  
    // Делаем фокус на инпуте  
    if (inputRef.current) {  
      inputRef.current.focus();  
    }  
  };  

  return (  
    <div>  
      <input ref={inputRef} type="text" placeholder="Нажми кнопку для фокуса" />  
      <button onClick={focusInput}>Фокус на инпуте</button>  
    </div>  
  );  
};  

export default InputFocus; `;

export const key = `import React from 'react';  

const ItemList = ({ items }) => {  
  return (  
    <ul>  
      {items.map((item, index) => (  
        <li key={item.id}> {/* Уникальный ключ */}  
          {item.name}  
        </li>  
      ))}  
    </ul>  
  );  
};  

// Пример использования компонента  
const App = () => {  
  const items = [  
    { id: 1, name: 'Элемент 1' },  
    { id: 2, name: 'Элемент 2' },  
    { id: 3, name: 'Элемент 3' },  
  ];  

  return <ItemList items={items} />;  
};  

export default App;`;

export const fragment = `import React, { Fragment } from 'react';  
const MyComponent = () => {  
  return (  
    <Fragment>  
      <h1>Заголовок</h1>  
      <p>Описание</p>  
    </Fragment>  
  );  
}; `;

export const shortFragment = `const MyComponent = () => {  
  return (  
    <>  
      <h1>Заголовок</h1>  
      <p>Описание</p>  
    </>  
  );  
}; `;

export const keyFragment = `const MyList = ({ items }) => {  
  return (  
    <>  
      {items.map((item) => (  
        <Fragment key={item.id}> {/* Используем ключ с Fragment */}  
          <h2>{item.title}</h2>  
          <p>{item.description}</p>  
        </Fragment>  
      ))}  
    </>  
  );  
}; `;
