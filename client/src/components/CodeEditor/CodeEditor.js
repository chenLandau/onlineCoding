import MonacoEditor from "@monaco-editor/react";
import React from "react";
import { useRoomContext } from "../../pages/Room/Room";

const CodeEditor = () => {
  const { editorContent, isMentor, onEditorChange } = useRoomContext();
  const options = {
    readOnly: isMentor,
    wordWrap: "on",
    minimap: { enabled: false },
    folding: false,
    lineNumbersMinChars: 3,
    fontSize: 16,
    automaticLayout: true,
    suggest: false,
    suggestSelection: "off",
    quickSuggestions: false,
    autoClosingBrackets: "never",
    autoClosingQuotes: "never",
  };
  return (
    <MonacoEditor
      theme="vs-dark"
      language="javascript"
      height="50vh"
      width="90vw"
      value={editorContent}
      options={options}
      onChange={onEditorChange}
    />
  );
};

export default CodeEditor;
