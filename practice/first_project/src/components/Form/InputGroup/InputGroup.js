import React from "react";
import Input from "../Input/Input";

import styles from "./InputGroup.module.css";

const InputGroup = (props) => {
  const { inputs, userInput } = props;

  return (
    <div className={styles["input-group"]}>
      {inputs.map((input) => (
        <Input
          key={input.id}
          id={input.id}
          title={input.title}
          userInput={userInput}
          userInputHandler={props.userInputHandler}
        />
      ))}
    </div>
  );
};

export default InputGroup;
