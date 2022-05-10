import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createGener } from "../../http/productAPI";

const CreateGener = ({ show, onHide }) => {

  const [value, setValue] = useState('')
  const addGener = () =>{
    createGener({name: value}).then(data => setValue(''))
    onHide()
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить жанр
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Form.Control 
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder={"Введите название жанра"}/>
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addGener}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateGener;