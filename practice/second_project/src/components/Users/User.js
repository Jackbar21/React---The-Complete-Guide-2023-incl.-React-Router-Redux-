import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

const User = (props) => {
  const { username, age } = props;

  const clickHandler = (e) => {
    props.deleteUserHandler({ username, age });
  };

  const displayString = `${username} (${age} ${
    age === 1 ? "year" : "years"
  } old)`;

  return (
    <ListGroup.Item onClick={clickHandler}>{displayString}</ListGroup.Item>
  );
};

export default User;
