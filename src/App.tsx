import { useContext } from 'react';
import './App.css';
import { TextContext } from './hooks/TextContext';

export default function App() {
  const { text, handleTextUpdate } = useContext(TextContext);

  return (
    <div className="App">
      <textarea
        value={text}
        onChange={event => handleTextUpdate(event.target.value)}
        cols={60}
        rows={30}
      ></textarea>
    </div>
  );
}
