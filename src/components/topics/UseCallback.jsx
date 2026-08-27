import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import { CodeBlock } from "../shared/CodeBlock";
import { NoteBlock } from "../shared/NoteBlock";
import * as use from "./pages-data/useCallback";

export const UseCallback = () => {
  return (
    <>
      <SectionTitle variant="h5" icon={"☎️"}>
        Оптимизация функций с использованием useCallback
      </SectionTitle>
      <TextBlock>
        Хук useCallback в React позволяет оптимизировать производительность
        компонента, предотвращая создание новых функций при каждом рендере. Это
        особенно полезно, когда функции передаются как пропсы дочерним
        компонентам или используются в зависимостях других хуков, таких как
        useEffect.
      </TextBlock>
      <SectionTitle>Синтаксис useCallback:</SectionTitle>
      <CodeBlock language="jsx" code={use.useCallback} />
      <TextBlock>
        Первый аргумент — это функция, которая должна быть мемоизирована. Второй
        аргумент — массив зависимостей, который определяет, когда функция должна
        быть пересоздана.
      </TextBlock>
      <TextBlock>
        Вот пример использования useCallback с обоими параметрами:
      </TextBlock>
      <CodeBlock language="jsx" code={use.useCallbackWithParams} />
      <TextBlock>
        В этом примере useCallback создает мемоизированную версию функции
        doSomething, и эта версия будет обновляться только в случае изменения
        значений a или b. Если a и b не изменятся между рендерами компонента, то
        useCallback вернет ту же самую мемоизированную функцию.
      </TextBlock>
      <NoteBlock
        title={"Когда использовать useCallback и зачем"}
        items={use.prompts}
      />
    </>
  );
};
