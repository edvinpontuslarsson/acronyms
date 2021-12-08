import { createContext } from "react";

interface ITextContext {
  suggestion: string | undefined;
  text: string;
  handleTextUpdate: () => void;
}

export const TextContext = createContext<ITextContext>({} as ITextContext);

// TODO update text here
// check if last word is acronym
// then show btn as suggestion
