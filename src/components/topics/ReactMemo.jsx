import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import { CodeBlock } from "../shared/CodeBlock";
import { NoteBlock } from "../shared/NoteBlock";
import * as reactMemo from "./pages-data/react-memo";

export const ReactMemo = () => {
  return (
    <>
      <SectionTitle variant="h5" icon={"💾"}>
        Оптимизация производительности с React.memo и useMemo
      </SectionTitle>
      <TextBlock>
        В React есть несколько способов оптимизации производительности
        компонентов, и два из них — это React.memo и useMemo.
      </TextBlock>
      <SectionTitle icon={"📷"}>React.memo</SectionTitle>
      <TextBlock>
        <code>React.memo</code> — это функциональный компонент, который
        предотвращает повторный рендеринг компонента, если его props не
        изменились. Это полезно для оптимизации функциональных компонентов,
        которые не зависят от состояния и контекста.
      </TextBlock>
      <CodeBlock language="jsx" code={reactMemo.memo} />

      <SectionTitle icon={"⚠️"}>
        В React.memo можно использовать второй параметр — функцию сравнения.
      </SectionTitle>
      <TextBlock>
        Эта функция, позволяет настраивать логику определения, нужно ли повторно
        рендерить компонент. По умолчанию React.memo выполняет поверхностное
        сравнение props, но вы можете предоставить свою функцию для более тонкой
        настройки.
      </TextBlock>
      <CodeBlock language="jsx" code={reactMemo.memoSecParam} />
      <TextBlock>
        Использование React.memo позволяет сократить количество повторных
        рендеров и улучшить производительность приложения, особенно для
        компонентов с большим количеством данных или сложными вычислениями
        внутри.
      </TextBlock>

      <SectionTitle icon={"🎥"}>useMemo</SectionTitle>
      <TextBlock>
        <code>useMemo</code> — это хук, который позволяет запоминать результат
        вычисления значения. Он будет пересчитывать закэшированное значение
        только тогда, когда изменятся указанные зависимости. Это помогает
        избежать ненужных перерасчетов в функции или вычислениях, которые могут
        быть дорогими по производительности..
      </TextBlock>
      <CodeBlock language="jsx" code={reactMemo.useMemo} />
      <TextBlock>
        В этом примере результат вычисления processData будет сохраняться и
        пересчитываться только при изменении значения пропса data. При
        последующих рендерах, если data не изменилось, будет использован
        сохраненный результат.
      </TextBlock>

      <SectionTitle icon={"📌"}>
        Когда использовать React.memo и useMemo
      </SectionTitle>

      <NoteBlock title={"React.memo:"} items={reactMemo.memoPrompts} />
      <NoteBlock title={"useMemo:"} items={reactMemo.useMemoPrompts} />
    </>
  );
};
