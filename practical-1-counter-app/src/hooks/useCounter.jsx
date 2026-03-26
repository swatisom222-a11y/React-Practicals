import React, { useState } from "react";

function useCounter(initialValue = 0) {
  //useState
  const [count, setCount] = useState(initialValue);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      reset();
    }
  }
  function reset() {
    setCount(initialValue);
  }
  return { count, increment, decrement, reset };
}

export default useCounter;
