import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    // console.log(text);
  }, [text]);

  return (
    <div className="App">
      <textarea
        value={text}
        // should call function here instead
        // this should be in context
        onChange={(event) => setText(event.target.value)}
        cols={60}
        rows={30}
      ></textarea>
    </div>
  );
}
