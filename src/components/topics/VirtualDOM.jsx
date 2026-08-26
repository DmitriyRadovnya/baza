import { NoteBlock } from "../shared/NoteBlock";
import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import { DOMPrompts, ReconciliationPrompts } from "./pages-data/virtual-dom";

export const VirtualDOM = () => {
  return (
    <>
      <SectionTitle variant="h5" icon="🏠">
        Введение в VirtualDOM
      </SectionTitle>

      <SectionTitle>Что такое DOM?</SectionTitle>
      <TextBlock>
        DOM - это сокращение от Document Object Model(объектная модель
        документа). Когда ты открываешь веб-страницу в браузере, браузер создает
        структуру документа, которую можно представить в виде дерева элементов.
        Эти элементы - это HTML-теги, например, div, p, h1 и другие. DOM
        позволяет нам манипулировать этой структурой, изменять содержимое,
        стили, добавлять и удалять элементы. Каждый раз, когда происходит
        изменение данных в приложении, React должен обновить DOM, чтобы
        отобразить эти изменения на странице.Но вместо того, чтобы
        непосредственно вносить изменения в реальный DOM,React использует
        виртуальный DOM.
      </TextBlock>
      <TextBlock>
        Виртуальный DOM - это промежуточное представление DOM в памяти
        компьютера. React создает виртуальное дерево элементов, которое точно
        соответствует текущему состоянию компонентов. Затем React сравнивает это
        виртуальное дерево с реальным DOM и определяет, какие изменения
        необходимо внести.
      </TextBlock>
      <NoteBlock
        title={"Почему это так важно? Вот несколько причин:"}
        items={DOMPrompts}
      />

      <SectionTitle icon="😎">Reconciliation</SectionTitle>
      <TextBlock>
        Reconciliation - это процесс, при котором React сравнивает предыдущее
        состояние компонента с новым состоянием и определяет, какие изменения
        нужно внести в пользовательский интерфейс.
      </TextBlock>
      <NoteBlock
        title={"Reconciliation происходит по следующему сценарию:"}
        items={ReconciliationPrompts}
      />
    </>
  );
};
