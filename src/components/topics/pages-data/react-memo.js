export const memo = `import React from 'react';

const MyComponent = React.memo((props) => {
  // Компонент будет перерисовываться только при изменении пропсов
  return (
    <div>
      {props.text}
    </div>
  );
}); `;

export const memoSecParam = `import React from 'react';

const MyComponent = React.memo((props) => {
  // Компонент будет перерисовываться только при изменении пропсов с помощью 
  // compareFunction
  return (
    <div>
      {props.text}
    </div>
  );
}, (prevProps, nextProps) => {
  // compareFunction - пользовательская функция сравнения пропсов
  // Возвращает true, если пропсы должны считаться равными и компонент не должен перерисовываться
});`;

export const useMemo = `import React, { useMemo } from 'react';

const MyComponent = ({ data }) => {
  const processedData = useMemo(() => {
    // Вычисления, требующие много времени или ресурсов
    // Например, фильтрация или сортировка массива данных
    return processData(data);
  }, [data]); // Зависимость - значение пропса "data"

  return (
    <div>
      {processedData}
    </div>
  );
};`;

export const memoPrompts = [
  {
    id: 1,
    text: "Используйте, когда у вас есть функциональный компонент, который зависит от props и может повторно рендериться без изменения этих props.",
  },
  {
    id: 2,
    text: "Особенно полезно для компонентов, которые принимают сложные объекты или функции в качестве props.",
  },
];

export const useMemoPrompts = [
  {
    id: 1,
    text: "Используйте, если у вас есть дорогие вычисления, результаты которых нужно запомнить.",
  },
  {
    id: 2,
    text: "Особенно полезно для компонентов, которые принимают сложные объекты или функции в качестве props.",
  },
];
