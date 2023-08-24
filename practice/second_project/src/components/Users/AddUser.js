import React, { useState } from "react";
import styled from "styled-components";
import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledAlert,
  StyledLabel,
} from "../UI/FormStyling";
import Button from "react-bootstrap/Button";
import InvalidInputModal from "../UI/Modal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const showErrorModal = errorMessage.length > 0;

  const invalidInputHandler = (errorMessage) => {
    setErrorMessage(errorMessage);
  };

  const closeHandler = () => {
    setErrorMessage("");
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!username || !age) {
      const msg = "Please enter a valid name and age (non-empty values).";
      invalidInputHandler(msg);
      return;
    }

    if (Number(age) <= 0) {
      const msg = "Please enter a valid age (> 0).";
      invalidInputHandler(msg);
      return;
    }

    props.addUserHandler({ username, age });
    clearForm();
  };

  const clearForm = () => {
    setUsername("");
    setAge("");
  };

  return (
    <>
      <StyledForm onSubmit={submitHandler}>
        <StyledLabel>Username:</StyledLabel>
        <StyledInput type="text" value={username} onChange={usernameHandler} />
        <StyledLabel className="mt-2">Age:</StyledLabel>
        <StyledInput type="number" value={age} onChange={ageHandler} />

        <Button
          type="submit"
          className="mt-3"
          disabled={false && (!username || !age)} // leaving here since cool trick
        >
          Add User
        </Button>
      </StyledForm>
      <InvalidInputModal
        show={showErrorModal}
        errorMessage={errorMessage}
        closeHandler={closeHandler}
      />
    </>
  );
};

export default AddUser;
