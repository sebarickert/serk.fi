import { PortableTextTypeComponentProps } from "@portabletext/react";
import { Highlight, Language, themes } from "prism-react-renderer";

type SyntaxHighlighterProps = {
  language: Language;
  code: string;
};

export const SyntaxHighlighter = ({
  value: { code, language },
}: PortableTextTypeComponentProps<SyntaxHighlighterProps>) => {
  return (
    <Highlight code={code} language={language} theme={themes.github}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className="flex">
          <code>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="inline-block w-8 opacity-30">{i + 1}</span>
                <span>
                  {line.map((token, key) => (
                    <span
                      key={key}
                      {...getTokenProps({
                        token,
                      })}
                    />
                  ))}
                </span>
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
};
