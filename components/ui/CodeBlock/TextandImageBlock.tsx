import {
    PortableText,
    type PortableTextReactComponents,
  } from "@portabletext/react";
import CodeHighlighter from "./CodeBlock";
import ImageComponent from "../ImageComponent";
  
  const components: Partial<PortableTextReactComponents> = {
    // ...
    types: {
    image: ImageComponent,
    // ...
      code: ({ value }) => {
        return <CodeHighlighter language={value.language} code={value.code} />;
      },
    },
  };
  
  export default function TextBlock({
    className,
    value,
  }: {
    className?: string;
    value: any;
  }) {
    return (
      <div className={className}>
        <PortableText value={value} components={components} />
      </div>
    );
  }