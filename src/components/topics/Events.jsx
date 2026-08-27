import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import { CodeBlock } from "../shared/CodeBlock";
import * as events from "./pages-data/events";

export const Events = () => {
  return (
    <>
      <SectionTitle variant="h5" icon={"❔"}>
        Events и как работать с ними.
      </SectionTitle>
      <TextBlock>
        В React события (events) являются важной частью взаимодействия с
        пользователем. Они позволяют обрабатывать действия пользователя, такие
        как клики, наведение, отправка формы и другие. Вот пять наиболее часто
        используемых событий в React и примеры их применения:
      </TextBlock>

      <SectionTitle icon={"☝️"}>onClick (Клик):</SectionTitle>
      <CodeBlock language="jsx" code={events.onClick} />

      <SectionTitle icon={"✋"}>onChange (Изменение):</SectionTitle>
      <CodeBlock language="jsx" code={events.onChange} />

      <SectionTitle icon={"👍"}>onSubmit (Отправка формы):</SectionTitle>
      <CodeBlock language="jsx" code={events.onSubmit} />

      <SectionTitle icon={"👊"}>onMouseOver (Наведение курсора):</SectionTitle>
      <CodeBlock language="jsx" code={events.onMouseOver} />

      <SectionTitle icon={"👌"}>onKeyDown (Нажатие клавиши):</SectionTitle>
      <CodeBlock language="jsx" code={events.onKeyDown} />
      <TextBlock>
        Существует множество других событий, таких как onFocus, onBlur,
        onScrollи т. д., которые могут быть использованы в зависимости от
        конкретных потребностей твоего приложения.
      </TextBlock>

      <SectionTitle icon={"💡"}>
        В React, параметр event в callback-функции представляет объект события,
        который генерируется при изменении значения элемента формы или
        компонента. event.target.value содержит текущее значение input элемента.
      </SectionTitle>
      <CodeBlock language="jsx" code={events.eventObject} />
    </>
  );
};
