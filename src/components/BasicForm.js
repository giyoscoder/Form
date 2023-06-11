import { useState, useEffect, useReducer } from "react";
import useBasicInput from "../Hooks/basic-input";



const BasicForm = (props) => {
  const [formValid, setFormValid] = useState(false);


  const {
    enteredValue: nameValue,
    inputValueHandler: nameInputHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
    errorHas: nameError,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    enteredValue: surnameValue,
    inputValueHandler: surnameInputHandler,
    inputBlurHandler: surnameBlurHandler,
    reset: surnameReset,
    errorHas: surnameError,
  } = useBasicInput((value) => value.trim() !== "");

  const {
    enteredValue: emailValue,
    inputValueHandler: emailInputHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
    errorHas: emailError,
  } = useBasicInput((value) => value.includes("@"));

  useEffect(() => {
    if (nameValue && surnameValue && emailValue) {
      setFormValid(true);
    }
  }, [nameValue, surnameValue, emailValue]);

  const fromSubmitHandler = (event) => {
    event.preventDefault();
 

    nameReset();
    surnameReset();
    emailReset();
  };

  const nameGroup = !nameError ? "form-control" : "form-control invalid";
  const surnameGroup = !surnameError ? "form-control" : "form-control invalid";
  const emailGroup = !emailError ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={fromSubmitHandler}>
      <div className="control-group">
        <div className={nameGroup}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
          />
          {nameError && <p className="error-text">Please, fill name!</p>}
        </div>
        <div className={surnameGroup}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={surnameInputHandler}
            onBlur={surnameBlurHandler}
            value={surnameValue}
          />
          {surnameError && <p className="error-text">Please, fill surname</p>}
        </div>
        <div className={emailGroup}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            onChange={emailInputHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />

          {emailError && <p className="error-text">Fill with, '@.gmail.com'</p>}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
