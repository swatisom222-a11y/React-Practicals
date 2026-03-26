import React from "react";
import useCounter from "./hooks/useCounter";

function App() {

 const{count,increment,decrement,reset}=useCounter(0);

  return (
    <div>
      <h1>This is custom hooks (Counter App)</h1>
      <h3>My Count is : {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
