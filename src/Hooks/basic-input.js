import { useState } from "react";

const useBasicInput = (condationCheck) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [inputTouch, setInputTouch] = useState(false);

  const inputFill = condationCheck(enteredValue);
  const errorHas = !inputFill && inputTouch;


  const inputValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setInputTouch(true);
  };

  const reset = () => {
    setEnteredValue("");
    setInputTouch(false)
  };

  return {
    enteredValue,
    inputValueHandler,
    inputBlurHandler,
    reset,
    errorHas,
  };
};

export default useBasicInput;
