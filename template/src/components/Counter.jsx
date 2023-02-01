import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  const onIncrease = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="counter">
      <span className="number">{count}</span>{" "}
      <span className="total">/{total}</span>
      <button
        className="button"
        onClick={() => {
          onIncrease();
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}
