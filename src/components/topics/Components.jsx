import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import { CodeBlock } from "../shared/CodeBlock";
import { NoteBlock } from "../shared/NoteBlock";
import {
  classComponent,
  funcComponent,
  statelessComp,
  statefulComp,
  pureFuncPrompts,
} from "./pages-data/components";

export const Components = () => {
  return (
    <>
      <SectionTitle icon="🏭">Основы компонентов в React</SectionTitle>
      <TextBlock>
        Компоненты- это небольшие, переиспользуемые элементы пользовательского
        интерфейса, которые объединены вместе, чтобы создать более крупные
        приложения.
      </TextBlock>
      <TextBlock>
        Компоненты позволяют разбить интерфейс на независимые части, про которые
        легко думать в отдельности. Во многом компоненты ведут себякак обычные
        функции JavaScript.Они принимают произвольные входные данные (так
        называемые «пропсы») и возвращают React-элементы, описывающие, что мы
        хотим увидеть на экране. Компоненты как кирпичики из которых ты можешь
        строит свое приложение
      </TextBlock>
      <SectionTitle>
        React компоненты могут быть классовыми или функциональными.
      </SectionTitle>
      <TextBlock>Пример объявления классового компонента в React:</TextBlock>
      <CodeBlock language="jsx" code={classComponent} />
      <TextBlock>
        Пример объявления функционального компонента в React:
      </TextBlock>
      <CodeBlock language="jsx" code={funcComponent} />
      <TextBlock>
        Оба примера создают компонент, который отображает текст Hello, Redev!.
        Разница заключается в том, что классовый компонент наследуется от
        базового класса React.Component и имеет доступ к дополнительным
        функциям, таким как состояние и методы жизненного цикла. 💡 Сейчас для
        объявления компонент используется функциональный подход. Классы
        потихоньку вымирают. Хотя ты еще можешь встретить проекты, где придется
        поддерживать код написанный на классах.
      </TextBlock>
      <SectionTitle icon="🚀">
        Компонента должна себя вести как чистая функция.
      </SectionTitle>
      <NoteBlock
        title={"“Чистой” называется функция, которая:"}
        items={pureFuncPrompts}
      />
      <SectionTitle icon="🙈">Stateless VS Stateful</SectionTitle>
      <TextBlock>
        Когда речь идет о React, часто упоминаются термины "stateless" и
        "stateful". Чтобы понять, что они значат, давай разберемся c этим.
      </TextBlock>
      <SectionTitle>Stateless компоненты</SectionTitle>
      <TextBlock>
        Они просто принимают props и возвращают JSX, который описывает, как
        должен выглядеть UI. Эти компоненты не имеют внутреннего состояния и не
        могут изменять свое поведение в зависимости от событий или действий
        пользователя.
      </TextBlock>
      <CodeBlock language="jsx" code={statelessComp} />
      <TextBlock>
        В этом примере компонент Greeting принимает проп name и отображает
        приветствие. Он не хранит состояние и не изменяется с течением времени.
      </TextBlock>

      <SectionTitle>Stateful компоненты</SectionTitle>
      <TextBlock>
        Stateful компоненты могут управлять состоянием и изменять свое поведение
        в зависимости от событий. Они используют внутреннее состояние, чтобы
        отслеживать изменения и обновлять UI в ответ на действия пользователя
        или другие события. С появлением хуков в React 16.8 функциональные
        компоненты могут также управлять состоянием и эффектами. Теперь можно
        создавать stateful функциональные компоненты с помощью хуков useState и
        useEffect.
      </TextBlock>
      <CodeBlock language="jsx" code={statefulComp} />
      <TextBlock icon="⚠️">
        Stateless компоненты просто рендерят UI, в то время как stateful
        компоненты имеют внутреннее состояние, которое позволяет им изменять
        своё поведение в ответ на события.
      </TextBlock>
      <TextBlock></TextBlock>
    </>
  );
};
