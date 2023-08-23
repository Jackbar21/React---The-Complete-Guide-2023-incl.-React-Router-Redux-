import React from "react";

const Input = (props) => {
  const { id, title, userInput } = props;

  // const idToUserInputKeyMap = {
  //   "current-savings": "currentSavings",
  //   "yearly-contribution": "yearlySavings",
  //   "expected-return": "interest",
  //   duration: "duration",
  // };

  // const key = idToUserInputKeyMap[id];
  // const value = userInput[key];
  const key = id;
  const value = userInput[key];
  // console.log(`key: ${key}, value: ${value}`);

  return (
    <p>
      <label htmlFor={id}>{title}</label>
      <input
        type="number"
        id={id}
        value={value}
        onChange={(event) => {
          // console.log(`Input.js TEST: ${(key, event.target.value, value)}`);
          return props.userInputHandler(key, event.target.value);
        }}
      />
    </p>
  );
};

export default Input;
