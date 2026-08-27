import { SectionTitle } from "../shared/SectionTitle";
import { TextBlock } from "../shared/TextBlock";
import { CodeBlock } from "../shared/CodeBlock";
import * as router from "./pages-data/react-router";

export const ReactRouter = () => {
  return (
    <>
      <SectionTitle variant="h5" icon={"🚦"}>
        Роутинг в React с помощью React Router V6
      </SectionTitle>
      <TextBlock>
        Основная цель роутинга в веб-приложениях заключается в том, чтобы
        позволить пользователям перемещаться по различным частям приложения БЕЗ
        ПЕРЕЗАГРУЗКИ страницы. Вместо того, чтобы каждый раз отправлять запрос
        на сервер и загружать новую страницу, роутинг позволяет динамически
        обновлять только необходимые компоненты или данные в соответствии с
        выбранным маршрутом.
      </TextBlock>
      <TextBlock>
        Кроме того, роутинг обеспечивает возможность передачи параметров через
        URL, что позволяет приложению динамически адаптироваться к разным
        условиям и сценариям использования. Например, приложение может
        отображать разные данные или компоненты на основе параметров маршрута,
        таких как идентификатор пользователя или идентификатор записи.
      </TextBlock>
      <SectionTitle icon={"📐"}>Основные компоненты</SectionTitle>
      <TextBlock>
        <code>BrowserRouter:</code> Этот компонент оборачивает ваше приложение и
        использует HTML5 историю для управления маршрутизацией.
      </TextBlock>
      <CodeBlock language="jsx" code={router.browserRouter} />

      <TextBlock>
        <code>Routes:</code> Этот компонент используется для определения группы
        маршрутов. Он является контейнером для компонентов Route.
      </TextBlock>
      <CodeBlock language="jsx" code={router.routes} />

      <TextBlock>
        <code>Route: </code>Этот компонент определяет отдельный маршрут. Атрибут
        path указывает URL, а element — компонент, который будет рендериться.
      </TextBlock>
      <CodeBlock language="jsx" code={router.route} />

      <TextBlock>
        <code>Link: </code>Этот компонент используется для навигации между
        маршрутами. Он заменяет теги <code>{"<a>"}</code> в React-приложении.
      </TextBlock>
      <CodeBlock language="jsx" code={router.link} />

      <TextBlock>
        <code>Outlet:</code> Этот компонент используется для рендеринга
        вложенных маршрутов. Он позволяет создавать иерархическую навигацию.
      </TextBlock>
      <CodeBlock language="jsx" code={router.outlet} />

      <SectionTitle icon={"✒️"}>Основные хуки</SectionTitle>
      <TextBlock>
        <code>useParams:</code> Используется для извлечения параметров URL в
        компонентах маршрутов.
      </TextBlock>
      <CodeBlock language="jsx" code={router.useParams} />

      <TextBlock>
        <code>useNavigate:</code> Позволяет программно изменять маршрут. Это
        может быть полезно для навигации после выполнения действий.
      </TextBlock>
      <CodeBlock language="jsx" code={router.useNavigate} />

      <TextBlock>
        <code>useLocation:</code> Предоставляет информацию о текущем URL, такой
        как pathname и состояние.
      </TextBlock>
      <CodeBlock language="jsx" code={router.useLocation} />

      <TextBlock>
        <code>useRoutes:</code> Позволяет определять маршруты в виде массива,
        что может быть удобно для управления маршрутами в более сложных
        приложениях.
      </TextBlock>
      <CodeBlock language="jsx" code={router.useRoutes} />

      <TextBlock>
        <code>useSearchParams:</code> Чтобы использовать useSearchParams, вам
        нужно импортировать его из react-router-dom. Вот пример того, как вы
        можете использовать его для извлечения и изменения параметров поискового
        запроса.
      </TextBlock>
      <CodeBlock language="jsx" code={router.useSearchParams} />
    </>
  );
};
