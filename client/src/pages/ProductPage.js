import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Card, Col, Image } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { fetchOneProduct } from '../http/productAPI';

const ProductPage = () => {
    const [productt, setProduct] = useState({info: []})
    const {id} = useParams()
        useEffect(() =>{
            fetchOneProduct(id).then(data => setProduct(data))
        }, [])
    

    return (
        <Container>
            <Row >
            <Col md={6} className='mt-5'>
                <Image widh={500} height={500} src={process.env.REACT_APP_API_URL + productt.img}/>
                
            </Col>
            <Col md={6} className='mt-5'>
                <Card className='mr-3 d-flex flex-column justify-content-around '>
                    <div style={{marginLeft:"10px", marginTop:"10px"}}>
                        <h1>Название: {productt.name}</h1>
                        <h2>Исполнитель: {productt.artist}</h2>
                        <h2>Автор: {productt.author}</h2>
                    </div>
                    <Card style={{marginTop:"337px"}} className='mr-3 d-flex flex-column justify-content-around '>
                        <div>
                            <h2 style={{marginLeft:"10px"}}>{productt.price} руб.
                            <Button style={{marginLeft:"390px"}} variant='outline-dark'>В корзину</Button></h2>
                        </div>
                    </Card>
                </Card>
            </Col>
            </Row>
        </Container>
        // </div>
    );
};

export default ProductPage;