import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { Context } from "../..";
import { fetchTypes, fetchGeners, createProduct } from "../../http/productAPI";



const CreateProduct = observer( ({ show, onHide }) => {
  const {producttt} = useContext(Context)
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [artist, setArtist] = useState('')
  const [descrip, setDescrip] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)

  useEffect(() => {
    fetchTypes().then(data => producttt.setTypes(data))
    fetchGeners().then(data => producttt.setGeners(data))
}, [])

  const selectFile = e => {
    setFile(e.target.files[0])
  }

  const addProduct = () => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('author', author)
    formData.append('artist', artist)
    formData.append('descrip', descrip)
    formData.append('price', `${price}`)
    formData.append('img', file)
    formData.append('genreId', producttt.selectedGener.id)
    formData.append('typeId', producttt.selectedType.id)

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
                <Dropdown.Toggle>{producttt.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {producttt.types.map(type =>
                      <Dropdown.Item 
                        onClick={() => producttt.setSelectedType(type)} 
                        key={type.id}>{type.name}
                      </Dropdown.Item>
                      )}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="mt-2 mb-2">
                <Dropdown.Toggle>{producttt.selectedGener.name || "Выберите жанр"}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {producttt.genres.map(genres =>
                      <Dropdown.Item 
                        onClick={() => producttt.setSelectedGener(genres)} 
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
                value={descrip}
                onChange={e => setDescrip(e.target.value)} 
                className="mt-2" 
                placeholder="Введите краткое описание"/>
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