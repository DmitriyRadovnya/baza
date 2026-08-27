import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import { CodeBlock } from "../shared/CodeBlock";
import * as rfk from "./pages-data/refs-fragment-key";

export const RefsFragmentKey = () => {
  return (
    <>
      <SectionTitle variant="h5" icon={"🎪"}>
        Использование Refs, Fragment и ключей в React
      </SectionTitle>

      <SectionTitle icon={"🔗"}>Refs</SectionTitle>
      <TextBlock>
        <code>Refs</code> (ссылки) позволяют получить доступ к DOM-элементам или
        компонентам, созданным React. Это полезно, когда необходимо напрямую
        взаимодействовать с элементами, например, для управления фокусом,
        текстом или анимацией.
      </TextBlock>
      <CodeBlock language="jsx" code={rfk.refs} />

      <SectionTitle icon={"🔑"}>Key</SectionTitle>
      <TextBlock>
        <code>Ключи (key)</code> помогают React идентифицировать элементы списка
        и оптимизировать процесс рендеринга. Каждый элемент должен иметь
        уникальный ключ, чтобы React знал, какие элементы были изменены,
        добавлены или удалены.
      </TextBlock>
      <CodeBlock language="jsx" code={rfk.key} />
      <TextBlock>
        Ключи нужно определять непосредственно внутри массивов. Если не указать
        ключи, в консоли увидим сообщение:{" "}
        <code>
          Warning: Each child in an array or iterator should have a unique “key”
          prop
        </code>
        . Ключи оптимизируют работу с элементами массивов, уменьшают количество
        ненужных удалений и созданий элементов.
      </TextBlock>
      <TextBlock>
        Без key механизм reconciliation сверяет компоненты попарно между текущим
        и новым VDOM. Из-за этого может происходить большое количество лишних
        перерисовок интерфейса, что замедляет работу приложения. Добавляя key,
        мы помогаем механизму reconciliation тем, что с key он сверяет не
        попарно, а ищет компоненты с тем же key (тег / имя компонента при этом
        учитывается) — это уменьшает количество перерисовок интерфейса.
        Обновлены/добавлены будут только те элементы, которые были изменены/не
        встречались в предыдущем дереве.
      </TextBlock>

      <SectionTitle icon={"🏰"}>Fragment</SectionTitle>
      <TextBlock>
        <code>Fragment</code> позволяет группировать несколько элементов без
        добавления лишнего узла в DOM. Это помогает сохранить структуру
        документа и избежать ненужных div-ов.
      </TextBlock>
      <CodeBlock language="jsx" code={rfk.fragment} />

      <TextBlock>
        Вы можете использовать сокращённую запись (пустые теги <>...</>), чтобы
        избежать эксплицитного импорта Fragment:
      </TextBlock>
      <CodeBlock language="jsx" code={rfk.shortFragment} />
      <TextBlock>
        Когда используется прямой импортFragment, можно передать атрибутkey, что
        полезно, когда нужно идентифицировать элементы в списках или при
        рендеринге динамических компонентов:
      </TextBlock>
      <CodeBlock language="jsx" code={rfk.keyFragment} />
    </>
  );
};
