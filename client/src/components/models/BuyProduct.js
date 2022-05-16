import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { SHOP_ROUTE } from "../../utils/consts";
import {useNavigate} from "react-router-dom";

const BuyProduct = ({ show, onHide }) => {
  const history = useNavigate()
  const redirect = path => {
    history(path);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Успешно!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Ваш заказ принят! Спасибо за покупку!</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary"  onClick={() => redirect(SHOP_ROUTE)}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BuyProduct;
