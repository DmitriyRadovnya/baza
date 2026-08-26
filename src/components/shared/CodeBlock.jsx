import { useEffect, useRef } from "react";
import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
import { oneDark } from "@codemirror/theme-one-dark";

// маппинг языка -> расширение CodeMirror
const languageExtensions = {
  javascript: () => javascript(),
  jsx: () => javascript({ jsx: true }),
  json: () => json(),
};

export const CodeBlock = ({ code, language = "javascript" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const lang = languageExtensions[language] || languageExtensions.javascript;

    const state = EditorState.create({
      doc: code,
      extensions: [
        basicSetup,
        lang(),
        oneDark,
        // ключевая настройка — отключаем редактирование
        EditorView.editable.of(false),
        EditorView.theme({
          "&": { height: "auto" },
          ".cm-scroller": {
            fontFamily: 'Consolas, "JetBrains Mono", monospace',
            fontSize: "0.9rem",
          },
        }),
      ],
    });

    const view = new EditorView({
      state,
      parent: containerRef.current,
    });

    // обязательная очистка при размонтировании
    return () => view.destroy();
  }, [code, language]);

  return <div ref={containerRef} />;
};
