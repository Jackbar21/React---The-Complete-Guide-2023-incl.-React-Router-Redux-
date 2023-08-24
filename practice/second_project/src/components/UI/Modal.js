import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const InvalidInputModal = (props) => {
  const { show, closeHandler, errorMessage } = props;

  return (
    <Modal show={show} onHide={closeHandler} centered>
      <Modal.Header closeButton className="bg-danger text-light">
        <Modal.Title className="text-light">INVALID INPUT</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-danger">{errorMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={closeHandler}>
          Okay
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InvalidInputModal;
