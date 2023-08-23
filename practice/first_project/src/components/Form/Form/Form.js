import React, { useState } from "react";
import styles from "./Form.module.css";
import inputGroups from "../../../data/inputGroups";
import InputGroup from "../InputGroup/InputGroup";
import Actions from "../Actions/Actions";

const Form = (props) => {
  const { onCalculate: calculateHandler } = props;

  const [userInput, setUserInput] = useState({
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const {
      "current-savings": currentSavings,
      "yearly-contribution": yearlyContribution,
      "expected-return": expectedReturn,
      duration,
    } = userInput;

    // if (!currentSavings || !yearlyContribution || !expectedReturn || !duration)
    //   return;

    // Otherwise good to go!
    // Make use of calculateHandler() function above from App.js
    console.log("submit!");
    calculateHandler(userInput);
  };

  const resetHandler = (event) => {
    const emptyUserInput = {
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      duration: "",
    };
    setUserInput(emptyUserInput);

    // Reset yearly data as well
    calculateHandler(emptyUserInput);
  };

  const userInputHandler = (key, value) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [key]: value,
    }));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {inputGroups.map((inputGroup) => (
        <InputGroup
          key={inputGroup.id}
          inputs={inputGroup.inputs}
          userInput={userInput}
          userInputHandler={userInputHandler}
        />
      ))}

      <Actions onReset={resetHandler} />
    </form>
  );
};

export default Form;
