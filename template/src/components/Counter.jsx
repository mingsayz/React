import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };
  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button className="button" onClick={onIncrease}>
        Add +
      </button>
      <button className="button" onClick={onDecrease}>
        Minus -
      </button>
    </div>
  );
}
