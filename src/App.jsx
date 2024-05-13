import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>
        Redux Playground
        <hr />
        <Display count={count} />
        <ButtonContainer setCount={setCount} count={count} />
      </h1>
    </>
  );
}

export default App;
