import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import { CodeBlock } from "../shared/CodeBlock";
import { createContext, provider, themeToggler } from "./codeFragments/context";

export const Context = () => {
  return (
    <>
      <SectionTitle icon="🎈">
        Управление глобальным состоянием с использованием Context и useContext
      </SectionTitle>
      <TextBlock>
        Context предоставляет способ передачи данных через дерево компонентов
        без явной передачи пропсов от родительских компонентов к дочерним. Это
        особенно полезно, когда необходимо передать данные глубоко в иерархии
        компонентов, избегая просачивания пропсов через несколько промежуточных
        компонентов.
      </TextBlock>
      <TextBlock>
        Разберем код, который создает контекст темы приложения с использованием
        useContext
      </TextBlock>
      <TextBlock>
        <strong>Создание контекста темы приложения</strong>
      </TextBlock>
      <CodeBlock language="jsx" code={createContext} />

      <SectionTitle>Оборачиваем приложение</SectionTitle>
      <TextBlock>
        При использовании контекста, мы оборачиваем основной компонент
        приложения в ThemeProvider, чтобы все дочерние компоненты имели доступ к
        контексту темы:
      </TextBlock>
      <CodeBlock language="jsx" code={provider} />

      <SectionTitle>Переключатель темы</SectionTitle>
      <TextBlock>
        Создание компонента переключателя, который использует контекст для
        изменения темы:
      </TextBlock>
      <CodeBlock language="jsx" code={themeToggler} />
      <TextBlock>
        В этом коде мы создаем контекст для управления темой (светлой или
        темной) в приложении. Мы используем useContext для доступа к контексту в
        любом компоненте, который обернут в ThemeProvider. Компонент ToggleTheme
        позволяет пользователю переключать темы, изменяя состояние в контексте.
      </TextBlock>

      <SectionTitle icon="⚠️">
        Злоупотребление контекстом может привести к проблемам с
        производительностью!
      </SectionTitle>
      <TextBlock>
        Контекст вызывает повторный рендеринг всех дочерних компонентов, когда
        его значение меняется. Это может привести к ненужным рендерингам и
        снижению производительности.
      </TextBlock>
    </>
  );
};
