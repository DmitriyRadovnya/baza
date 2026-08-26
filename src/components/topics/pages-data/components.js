export const classComponent = `class MyComponent extends React.Component {
  render() {
    return <div>Hello, Redev!</div>;
  }
}
export default MyComponent;`;

export const funcComponent = `class MyComponent extends React.Component {
  render() {
    return <div>Hello, Redev!</div>;
  }
}
export default MyComponent;`;

export const statelessComp = `const Greeting = ({name}) => {
  return <h1>Hello, {name}!</h1>;
};`;

export const statefulComp = `import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};`;

export const pureFuncPrompts = [
  {
    id: 1,
    text: "Для одинаковых входных данных всегда возвращает один результат.",
  },
  {
    id: 2,
    text: "Не имеет побочных эффектов (то есть не изменяет внешние состояния).",
  },
  {
    id: 3,
    text: "Не зависит от внешних состояний.",
  },
];
