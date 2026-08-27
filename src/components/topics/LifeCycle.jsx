import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import { CodeBlock } from "../shared/CodeBlock";
import { NoteBlock } from "../shared/NoteBlock";
import * as lifeCycle from "./pages-data/life-cycle";

export const LifeCycle = () => {
  return (
    <>
      <SectionTitle variant="h5" icon={"🎂"}>
        Жизненный цикл компонентов с useEffect и без
      </SectionTitle>
      <TextBlock>
        В React методы жизненного цикла компонентов делятся на классовые и
        функциональные компоненты (с использованием хуков).
      </TextBlock>
      <SectionTitle icon={"🍒"}>Классовые компоненты</SectionTitle>
      <TextBlock>
        1. constructor(props): Вызывается при создании компонента, обычно
        используется для инициализации состояния и привязки методов.
      </TextBlock>
      <CodeBlock language="jsx" code={lifeCycle.classConstructor} />

      <TextBlock>
        2. Метод render() является обязательным для классовых компонентов. Он
        возвращает JSX, который определяет визуальное представление компонента.
      </TextBlock>
      <CodeBlock language="jsx" code={lifeCycle.methodRender} />

      <TextBlock>
        3. componentDidMount(): Вызывается сразу после монтирования компонента.
        Используется для выполнения запросов к API или подписки на события.
      </TextBlock>
      <CodeBlock language="jsx" code={lifeCycle.didMountMethod} />

      <TextBlock>
        4. componentDidUpdate(prevProps, prevState): Вызывается после обновления
        компонента. Можно использовать для сравнения предыдущих и текущих
        пропсов или состояния.
      </TextBlock>
      <CodeBlock language="jsx" code={lifeCycle.didUpdateMethod} />

      <TextBlock>
        5. componentWillUnmount(): Вызывается перед размонтированием компонента.
        Полезно для очистки таймеров или отмены подписок.
      </TextBlock>
      <CodeBlock language="jsx" code={lifeCycle.willUnmountMethod} />

      <SectionTitle icon={"🍋"}>
        Функциональные компоненты с хуками
      </SectionTitle>
      <TextBlock>
        С выходом хуков в React 16.8 код функциональных компонентов стал более
        гибким и читаемым. Главное — использовать хук useEffect для управления
        жизненным циклом.
      </TextBlock>
      <CodeBlock language="jsx" code={lifeCycle.hookLifeCycle} />
      <TextBlock icon={"💡"}>
        Таким образом, в классовых компонентах у нас есть конкретные методы,
        позволяющие отслеживать различные фазы жизненного цикла. В
        функциональных компонентах с хуками мы можем использовать useEffect для
        достижения аналогичных результатов, что делает код более компактным и
        понятным.
      </TextBlock>
    </>
  );
};
