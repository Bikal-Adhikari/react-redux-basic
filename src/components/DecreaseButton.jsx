import React from "react";

const DecreaseButton = ({ setCount, count }) => {
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      {" "}
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default DecreaseButton;
