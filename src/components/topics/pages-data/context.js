export const createContext = `import { createContext, useContext, useState, ReactNode } from 'react';  

// Определяем возможные темы для приложения  
export enum Theme {  
  Light = 'Light', // Светлая тема  
  Dark = 'Dark',   // Темная тема  
}  

// Тип для контекста темы  
type ThemeContextType = {  
  theme: Theme; // Текущая тема  
  toggleTheme: () => void; // Функция для переключения темы  
};  

// Тип для пропсов провайдера контекста  
type ContextProviderPropsType = {  
  children: ReactNode; // Дочерние элементы, которые будут обернуты в провайдер  
};  

// Создаем сам контекст с начальным значением undefined  
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);  

// Провайдер контекста темы  
export const ThemeProvider = (props: ContextProviderPropsType): JSX.Element => {  
  // Состояние для хранения текущей темы, по умолчанию светлая  
  const [theme, setTheme] = useState<Theme>(Theme.Light);  
  const { children } = props;  

  // Функция для переключения темы  
  const toggleTheme = (): void => {  
    setTheme((prevTheme) =>  
      prevTheme === Theme.Light ? Theme.Dark : Theme.Light  
    );  
  };  

  // Объект, который будет передан в контекст  
  const value = { theme, toggleTheme };  

  // Возвращаем провайдер с заданным значением  
  return (  
    <ThemeContext.Provider value={value}>  
      <div className={base theme '$'{value.theme}'}>{children}</div>  
    </ThemeContext.Provider>  
  );  
};  

// Хук для использования контекста темы  
export const useTheme = (): ThemeContextType => {  
  const context = useContext(ThemeContext);  
  // Выбрасываем ошибку, если контекст был использован вне провайдера  
  if (!context) {  
    throw new Error('useTheme must be used within a ThemeProvider');  
  }  
  return context; // Возвращаем контекст  
}; `;

export const provider = `<ThemeProvider>  
  <App />  
</ThemeProvider>  `;

export const themeToggler = `export const ToggleTheme: React.FC = () => {  
  const { toggleTheme, theme } = useTheme(); // Получаем функцию и тему из контекста  
  // Определяем классы для кнопки в зависимости от текущей темы  
  const btnStyle =  
    theme === Theme.Light  
      ? toggleBtn toggle '$'{Theme.Light}  
      : toggleBtn toggle'$'{Theme.Dark};  
  
  return (  
    <div className="toggleWrapper">  
      <button className={btnStyle} onClick={toggleTheme}>  
        {theme} {/* Отображаем текущую тему на кнопке */}  
      </button>  
    </div>  
  );  
};`;
