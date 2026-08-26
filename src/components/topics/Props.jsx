import { CodeBlock } from "../shared/CodeBlock";
import { Container, Box } from "@mui/material";
import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import {
  codeSimple,
  codeDestructuring,
  codeClassComponent,
} from "./codeFragments/props";

export const Props = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4, textAlign: "start" }}>
      <SectionTitle icon="🎃">Что такое пропсы и зачем они нужны</SectionTitle>
      <TextBlock>
        Пропсы (сокращение от properties) - это данные, которые передаются в
        компоненты React для настройки их поведения и внешнего вида. Они
        позволяют передавать информацию из родительского компонента в дочерний
        компонент. Дочерний компонент может читать эти props и использовать их,
        например, для вывода данных на экран или для изменения своего поведения.
      </TextBlock>

      <SectionTitle icon="🍧">Передача пропсов компонентам</SectionTitle>
      <TextBlock>
        Пропсы передаются в компоненты в виде атрибутов при их использовании в
        JSX. Например,{" "}
        <code>&lt;ChildComponent message="Привет, Redev!" /&gt;</code> передает
        пропс message со значением «Привет, Redev!» в компонент ChildComponent и
        выводит это сообщение на экран.
      </TextBlock>
      <CodeBlock language="jsx" code={codeSimple} />

      <SectionTitle icon="🍰">Доступ к пропсам внутри компонентов</SectionTitle>
      <TextBlock>
        В функциональных компонентах пропсы доступны как параметр функции
        компонента. например,
        <code>&lt;{`(props) => {...}`} /&gt;</code>.
      </TextBlock>
      <CodeBlock language="jsx" code={codeDestructuring} />

      <TextBlock>
        В классовых компонентах пропсы доступны через <code>this.props</code> .
        Например, <code>this.props.message</code>. Пример с классовой
        компонентой:
      </TextBlock>
      <CodeBlock language="jsx" code={codeClassComponent} />

      <TextBlock>
        Props можно использовать для передачи любых данных, включая строки,
        числа, массивы, объекты и функции.
      </TextBlock>

      <TextBlock icon="⚠️">
        Пропсы являются неизменяемыми (immutable), их нельзя изменять напрямую.
      </TextBlock>

      <TextBlock>
        Можно использовать состояние компонента (state) для изменения пропсов.
        Пропсы в React играют важную роль в передаче данных и настройке
        компонентов. Они позволяют создавать переиспользуемые компоненты.
        Правильное использование пропсов способствует лучшей организации кода и
        разделению ответственности между компонентами.
      </TextBlock>

      <SectionTitle icon="📢">ИТОГО:</SectionTitle>
      <Box component="ul" sx={{ pl: 2, mb: 3 }}>
        <TextBlock icon="😸">
          <strong>Что такое props в React?</strong> Props - это объекты, которые
          передаются в компоненты как параметры. Они используются для передачи
          данных из родительского компонента в дочерний.
        </TextBlock>
        <TextBlock icon="😸">
          <strong>Как передавать props в компоненты?</strong> Props можно
          передавать в компоненты как атрибуты. В родительском компоненте нужно
          указать имя атрибута и значение, которое будет передано в дочерний
          компонент.
        </TextBlock>
        <TextBlock icon="😸">
          <strong>Как читать props в компоненте?</strong> Props можно читать в
          компоненте через объект props. Этот объект содержит все переданные в
          компонент атрибуты.
        </TextBlock>
        <TextBlock icon="😸">
          <strong>Какие данные можно передавать через props?</strong> Props
          можно использовать для передачи любых данных, включая строки, числа,
          массивы, объекты и функции.
        </TextBlock>
        <TextBlock icon="😸">
          <strong>Можно ли менять пропсы?</strong> Нельзя.
        </TextBlock>
        <TextBlock icon="😸">
          <strong>
            Что делать, если нужно изменить данные в дочернем компоненте?Если
            нужно изменить данные в дочернем компоненте, следует использовать
            состояние (state). Про него поговорим дальше. Если у тебя есть
            какие-либо вопросы, не стесняйся задавать их.
          </strong>
        </TextBlock>
      </Box>
    </Container>
  );
};
