import React from "react";

const AddButton = ({ setCount, count }) => {
  const increase = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {" "}
      <button onClick={increase}>+</button>
    </div>
  );
};

export default AddButton;
