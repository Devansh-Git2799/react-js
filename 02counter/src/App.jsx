import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 5;

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else console.log("counter limit is 20");
    // console.log(counter);
  };
  const removeValue = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    } else {
      console.log("counter cannot be negative");
    }
    // console.log(counter);
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue} disabled={counter >= 20}>
        Add Value {counter}
      </button>
      <br />
      <button onClick={removeValue} disabled={counter <= 0}>
        Remove Value {counter}
      </button>
    </>
  );
}

export default App;
