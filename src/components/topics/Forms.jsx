import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import { CodeBlock } from "../shared/CodeBlock";
import { NoteBlock } from "../shared/NoteBlock";
import * as forms from "./pages-data/forms";

export const Forms = () => {
  return (
    <>
      <SectionTitle variant="h5" icon={"📰"}>
        Формы и их обработка в React
      </SectionTitle>
      <TextBlock>
        Формы - это часть большинства веб-приложений. Однако их создание и
        управление может быть сложным для новичков. В React существует несколько
        способов использования форм в приложении, в зависимости от потребностей
        и предпочтений разработчика.
      </TextBlock>

      <NoteBlock
        title={"Основные варианты использования форм в React приложении:"}
        items={forms.prompts}
      />

      <TextBlock>
        Пример простого React приложения с формой, которая использует библиотеку
        <code>react-hook-form</code> для управления формами и <code>yup</code>
        для валидации входных данных.
      </TextBlock>
      <CodeBlock language="jsx" code={forms.rhfYup} />
    </>
  );
};
