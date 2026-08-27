import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import { CodeBlock } from "../shared/CodeBlock";
import { NoteBlock } from "../shared/NoteBlock";
import * as storages from "./pages-data/storages";

export const Storages = () => {
  return (
    <>
      <SectionTitle variant="h5" icon={"📕"}>
        Про STORAGEs (Local Storage, Session Storage, Local Forage…)
      </SectionTitle>
      <SectionTitle icon={"📄"}>Local Storage</SectionTitle>
      <TextBlock>
        <code>Local Storage</code> - это механизм, который позволяет
        веб-приложениям сохранять данные локально в браузере. Это означает, что
        данные будут сохранены после закрытия браузера и перезагрузки страницы.
      </TextBlock>
      <TextBlock>
        LocalStorage может быть использован для хранения различных типов данных,
        таких как строки, числа, булевы значения и объекты. Он может быть
        полезен для хранения пользовательских настроек (например темная тема на
        сайте), предпочтений пользователя и других данных, которые могут быть
        использованы для персонализации пользовательского опыта. Для записи
        данных в LocalStorage можно использовать localStorage объекта window в
        JavaScript.
      </TextBlock>
      <CodeBlock code={storages.localeStorage} />

      <SectionTitle icon={"📋"}>Session Storage</SectionTitle>
      <TextBlock>
        <code>Session Storage</code> похож на LocalStorage, но данные хранятся
        только в течение сессии. Они исчезают после закрытия вкладки или окна.
      </TextBlock>
      <CodeBlock code={storages.sessionStorage} />

      <SectionTitle icon={"📗"}>LocalForage</SectionTitle>
      <TextBlock>
        <code>LocalForage</code> — это библиотека, которая обеспечивает
        улучшенное API для хранения данных в браузере. Она позволяет работать с
        асинхронными операциями и поддерживает различные механизмы хранения (как
        IndexedDB, WebSQL, и LocalStorage). Это делает её более мощным
        инструментом для работы с данными.
      </TextBlock>
      <SectionTitle icon={"🍪"}>Cookies</SectionTitle>
      <TextBlock>
        <code>Cookies</code> - это небольшие текстовые файлы, которые веб-сайты
        отправляют и хранят на компьютере пользователя через его веб-браузер.
        Они представляют собой удобный механизм для хранения небольших данных,
        связанных с пользователем и веб-сайтом. В контексте React приложений,
        cookies могут быть использованы для сохранения состояния приложения и
        обеспечения персонализации.
      </TextBlock>
      <NoteBlock
        title={"Зачем нужно хранилище в виде Cookies?"}
        items={storages.cookiesPrompts}
      />
      <NoteBlock
        title={"Отличие от LocalStorage"}
        items={storages.diffsPrompts}
      />

      <SectionTitle>Работа с Cookies в React</SectionTitle>
      <TextBlock>
        В React приложениях можно работать с cookies, используя В React
        приложениях можно работать с cookies, используя <code></code>
        для работы с ними или же библиотеку
        <code>https://www.npmjs.com/package/cookie</code>.
      </TextBlock>
    </>
  );
};
