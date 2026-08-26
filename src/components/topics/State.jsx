import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import { CodeBlock } from "../shared/CodeBlock";
import { NoteBlock } from "../shared/NoteBlock";
import * as state from "./pages-data/state";

export const State = () => {
  return (
    <>
      <SectionTitle variant="h5" icon="💰">
        Управление состоянием с использованием useState
      </SectionTitle>
      <TextBlock>
        При разработке приложений состояние (state) играет важную роль. Оно
        представляет собой данные, которые используются внутри компонента для
        отслеживания и обновления информации. Состояние позволяет компонентам
        быть динамичными и реагировать на изменения данных или взаимодействие
        пользователя. Простыми словами, это то, что ИЗМЕНЯЕТСЯ в компоненте,
        нежели props-ы которые неизменны.
      </TextBlock>
      <TextBlock icon="💡">
        Хук (hook) в контексте React — это специальная функция, которая
        позволяет подключаться к возможностям React из функциональных
        компонентов. Хуки были введены в React в версии 16.8 и позволяют
        использовать функциональные компоненты вместо классовых для большинства
        задач, для которых раньше требовались классы.
      </TextBlock>
      <TextBlock>
        В React есть возможность использовать state в функциональных
        компонентах, путем использования хука useState.
        <code>
          {`import React, {useState} from 'react'; const [state, setState] =
          useState(initialState);`}
        </code>
      </TextBlock>
      <TextBlock>
        Хук useState позволяет функциональным компонентам в React добавлять
        локальное состояние. Он возвращает массив с парой значений: [текущее
        значение состояния, функцию для его обновления]. При вызове функции
        обновления, React перерисует компонент с новым значением состояния.
      </TextBlock>
      <TextBlock>state:текущее значение состояния.</TextBlock>
      <TextBlock>
        setState :функция для обновления значения состояния.
      </TextBlock>
      <TextBlock>
        initialState :(необязательный): начальное значение состояния. Может быть
        примитивным типом данных, объектом или функцией.
      </TextBlock>

      <SectionTitle icon="🔨">Создание state</SectionTitle>
      <TextBlock>
        Например, можно создать состояние для отслеживания текущего счетчика:
      </TextBlock>
      <CodeBlock language="jsx" code={state.useState} />

      <SectionTitle icon="🔧">Обновление состояния</SectionTitle>
      <TextBlock>
        Для обновления состояния в функциональных компонентах используется
        функция setCount, которая является вторым элементом массива,
        возвращаемого useState. При вызове setCount передается новое значение
        состояния или функция. Когда новое состояние зависит от предыдущего, то
        лучше использовать функциональное обновление.
      </TextBlock>
      <CodeBlock language="jsx" code={state.updateState} />
      <TextBlock>
        React автоматически обновит компонент и перерисует его с новым значением
        состояния:
      </TextBlock>

      <SectionTitle icon="🔪">
        Пример использования state в компонентах
      </SectionTitle>
      <TextBlock>
        Состояние позволяет компонентам отображать и обновлять данные. Чаще
        всего используется для временного хранения каких-то данных. Состояние
        также позволяет реагировать на события и обновлять компонент в
        соответствии с новыми данными. Пример использования состояния для
        отслеживания текущего счетчика и его отображения:
      </TextBlock>
      <CodeBlock language="jsx" code={state.counter} />
      <TextBlock icon="💣">
        <strong>
          State можно передавать в дочерние компоненты при помощи props.
        </strong>
      </TextBlock>
      <CodeBlock language="jsx" code={state.stateToProps} />
      <TextBlock>
        В данном примере состояние счетчика хранится в родительском компоненте
        ParentComponent, а значение состояния передается в дочерний компонент
        ChildComponent через пропсы.
      </TextBlock>
      <NoteBlock title={"Примечания"} items={state.notesPrompts} />

      <SectionTitle icon={"💾"}>state с объектом.</SectionTitle>
      <TextBlock>
        При обновлении объекта в состоянии нужно создавать новый объект вместо
        изменения существующего, чтобы соблюсти принцип неизменяемости.
      </TextBlock>
      <CodeBlock language="jsx" code={state.stateWithObj} />
      <NoteBlock title={" Важные моменты"} items={state.importantPrompts} />

      <SectionTitle icon={"⌚"}>
        Функция-setter (например setState) - асинхронная операция!
      </SectionTitle>
      <TextBlock>
        Когда мы вызываем setState, React не обновляет состояние и не рендерит
        компонент немедленно. Вместо этого он помещает обновление в очередь.
        После этого React применяет все обновления состояния за один раз перед
        следующим рендером компонента.
      </TextBlock>
      <NoteBlock
        title={"Асинхронное поведение сеттеров в React позволяет:"}
        items={state.asyncSetterPrompts}
      />

      <SectionTitle icon={"📷"}>State в классах</SectionTitle>
      <TextBlock>
        Хотя классовые компоненты сейчас не используются, но знать как с ними
        работать нужно.
      </TextBlock>
      <CodeBlock language="jsx" code={state.stateInClasses} />
    </>
  );
};
