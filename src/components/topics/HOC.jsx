import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import { CodeBlock } from "../shared/CodeBlock";
import { NoteBlock } from "../shared/NoteBlock";
import * as hoc from "./pages-data/hoc";

export const HOC = () => {
  return (
    <>
      <SectionTitle variant="h5" icon={"🎨"}>
        HOС (Higher-Order Components)
      </SectionTitle>
      <TextBlock>
        <code>Higher-Order Components (HOC)</code> в React — это шаблон
        проектирования, который позволяет повторно использовать логику
        компонентов. HOС представляют собой функции, которые принимают компонент
        и возвращают новый компонент, оборачивающий или модифицирующий исходный.
      </TextBlock>
      <TextBlock>
        <code>HOC</code> используется для добавления функциональности к
        компонентам без изменения их кода. Например, вы можете создать HOC для
        управления состоянием, получения данных или реализации логики
        маршрутизации.
      </TextBlock>
      <TextBlock>
        Пример HOC, который добавляет обертку вокруг компонента и выводит
        сообщение о загрузке.
      </TextBlock>
      <CodeBlock language="jsx" code={hoc.hoc} />
      <NoteBlock
        title={"HOC полезны в следующих случаях:"}
        items={hoc.prompts}
      />
    </>
  );
};
