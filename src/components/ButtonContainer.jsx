import React from "react";
import AddButton from "./AddButton";
import DecreaseButton from "./DecreaseButton";

const ButtonContainer = ({ setCount, count }) => {
  return (
    <div>
      <AddButton setCount={setCount} count={count} />
      <DecreaseButton setCount={setCount} count={count} />
    </div>
  );
};

export default ButtonContainer;
