import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [previous, setPrevious] = useState(0);

  return (
    <div>
      <p>Le compteur est à : {count} </p>

      <button
        onClick={() => {
          setPrevious(count);
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setPrevious(count);
          setCount(count - 1);
        }}
      >
        -1
      </button>
      <input value={previous} onChange={() => setPrevious(count)}></input>
    </div>
  );
}

export default Counter;
