import { createContext, ReactNode, useState } from "react";

interface ITextContext {
  suggestion: string | undefined;
  text: string;
  handleTextUpdate: (updatedText: string) => void;
}

export const TextContext = createContext<ITextContext>({} as ITextContext);

// TODO update text here
// check if last word is acronym
// then show btn as suggestion

interface IProps {
  children: ReactNode;
}

export const TextProvider = (props: IProps) => {
  const [suggestion, setSuggestion] = useState<string | undefined>(undefined);
  const [text, setText] = useState("");

  const handleTextUpdate = (updatedText: string) => {
    // TODO check for acronyms here
    setText(updatedText);
    setSuggestion(undefined);
  };

  const textContext: ITextContext = {
    suggestion,
    text,
    handleTextUpdate,
  };

  return (
    <TextContext.Provider value={textContext}>
      {props.children}
    </TextContext.Provider>
  );
};
