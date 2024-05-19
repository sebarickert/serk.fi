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
    <Highlight theme={themes.nightOwl} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="-mx-6 md:-mx-10 lg:-mx-24">
          <pre
            className={`scrollbar scrollbar scrollbar-thin scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 prose:!rounded overflow-x-auto !rounded-none ${className}`}
            style={{ ...style }}
          >
            <code className="inline-block min-w-full">
              {tokens.map((line, i) => {
                const tokenProps = getLineProps({ line, key: i });
                delete tokenProps.key;

                return (
                  <div key={i} {...tokenProps}>
                    <span className="inline-block w-8 opacity-30">{i + 1}</span>
                    <span>
                      {line.map((token, key) => {
                        let lineProps = getTokenProps({
                          token,
                          key,
                        });

                        delete lineProps.key;

                        return <span key={key} {...lineProps} />;
                      })}
                    </span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  );
};
