import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>Counter</h1>
      <div className="count-display">
        <span>{count}</span>
      </div>
      <div className="button-group">
        <button className="button plus" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="button minus" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className="button reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
