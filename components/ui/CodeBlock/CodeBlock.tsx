import React from "react";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../../.././node_modules/highlight.js/styles/a11y-dark.css'
const SyntaxHighlighter =
  Prism as typeof React.Component<SyntaxHighlighterProps>;

export default function CodeHighlighter({
  language,
  code,
}: {
  language: string;
  code: string;
}) {
  return (
    <SyntaxHighlighter
      language={language}
      style={a11yDark}
      showLineNumbers={true}
      className="text-xs"
    >
      {code}
    </SyntaxHighlighter>
  );
}
