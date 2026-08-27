export const useCallback = `const memoizedCallback = useCallback(() => {  
  // Ваша логика здесь  
}, [dependencies]);  `;

export const useCallbackWithParams = `const memoizedCallback = useCallback(
  () => doSomething(a, b),
  [a, b],
);`;

export const prompts = [
  {
    id: 1,
    text: "Производительность: Используйте useCallback, когда передаете функции в дочерние компоненты, которые используют React.memo, чтобы избежать лишних рендеров.",
  },
  {
    id: 2,
    text: "Зависимости хука: Используйте useCallback для функций, которые используются в массиве зависимостей других хуков, таких как useEffect или useMemo, чтобы избежать ненужных вызовов этих хуков.",
  },
  {
    id: 3,
    text: "Состояние и управление событиями: Если функция зависит от какой-либо переменной состояния и вам необходимо, чтобы она не пересоздавалась, когда это состояние не меняется.",
  },
];
