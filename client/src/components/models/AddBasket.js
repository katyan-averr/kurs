import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddBasket = ({ show, onHide }) => {

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Успешно!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Товар добавлен в корзину!</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBasket;
