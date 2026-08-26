import { SectionTitle } from "../shared/SectionTitle";
import { CodeBlock } from "../shared/CodeBlock";
import { TextBlock } from "../shared/TextBlock";
import { packageJSON, structure } from "./codeFragments/project-structure";

export const ProjectStructure = () => {
  return (
    <>
      <SectionTitle icon="🏩">Структура проекта</SectionTitle>
      <TextBlock>
        Типичная структура проекта React, созданного с помощью Vite и
        TypeScript, может выглядеть следующим образом:
      </TextBlock>
      <CodeBlock language="json" code={structure} />
      <SectionTitle icon="🍅">package.json</SectionTitle>
      <CodeBlock language="json" code={packageJSON} />
      <TextBlock icon="⚠️">
        Package.json - это своего рода 💙сердце проекта React. Он содержит всю
        важную информацию о проекте, его зависимостях, настройках и скриптах.
        Этот файл помогает управлять зависимостями, автоматизировать задачи и
        поддерживать порядок в проекте.
      </TextBlock>
    </>
  );
};
