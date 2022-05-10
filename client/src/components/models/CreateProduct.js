import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { Context } from "../..";
import { fetchTypes, fetchGeners, createProduct } from "../../http/productAPI";



const CreateProduct = observer( ({ show, onHide }) => {
  const {productt} = useContext(Context)
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [artist, setArtist] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)

  useEffect(() => {
    fetchTypes().then(data => productt.setTypes(data))
    fetchGeners().then(data => productt.setGeners(data))
}, [])

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addProduct = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('author', author)
    formData.append('artist', artist)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('generId', productt.selectedGener.id)
    formData.append('typeId', productt.selectedType.id)

    createProduct(formData).then(data => onHide())
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить товар
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle>{productt.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {productt.types.map(type =>
                      <Dropdown.Item 
                        onClick={() => productt.setSelectedType(type)} 
                        key={type.id}>{type.name}
                      </Dropdown.Item>
                      )}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle>{productt.selectedGener.name || "Выберите жанр"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {productt.genres.map(genres =>
                      <Dropdown.Item 
                        onClick={() => productt.setSelectedGener(genres)} 
                        key={genres.id}>{genres.name}
                      </Dropdown.Item>
                      )}
                </Dropdown.Menu>
              </Dropdown>
              <Form.Control
                value={name}
                onChange={e => setName(e.target.value)} 
                className="mt-2" 
                placeholder="Введите название"/>
              <Form.Control
                value={artist}
                onChange={e => setArtist(e.target.value)}  
                className="mt-2" 
                placeholder="Введите исполнителя"/>
              <Form.Control 
                value={author}
                onChange={e => setAuthor(e.target.value)} 
                className="mt-2" 
                placeholder="Введите автора"/>
              <Form.Control 
                value={price}
                onChange={e => setPrice(Number(e.target.value))} 
                className="mt-2" 
                placeholder="Введите стоимость" 
                type="number"/>
              <Form.Control className="mt-2" type="file" onChange={selectFile}/>
              <hr />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={addProduct}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateProduct;