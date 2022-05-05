import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Card, Col, Image } from 'react-bootstrap';

const ProductPage = () => {
    const product = {id: 1, name:"Rise", author:"Skillet", price: 100, img:`https://cdns-images.dzcdn.net/images/cover/8371d7162676a323868ca2e2f5cf4fc4/1000x1000.jpg`}
    return (
        // <div style={{backgroundImage:"url(https://www.rollingstone.com/wp-content/uploads/2018/06/rs-183540-108195157.jpg)", backgroundSize: "cover",
        // width: "100%",
        // height: "685px",}}>
        <Container>
            <Row >
            <Col md={6} className='mt-5'>
                <Image widh={500} height={500} src={product.img}/>
                
            </Col>
            <Col md={6} className='mt-5'>
                <Card className='mr-3 d-flex flex-column justify-content-around '>
                    <div style={{marginLeft:"10px", marginTop:"10px"}}>
                        <h1>Название: {product.name}</h1>
                        <h2>Исполнитель: {product.author}</h2>
                    </div>
                    <Card style={{marginTop:"337px"}} className='mr-3 d-flex flex-column justify-content-around '>
                        <div>
                            <h2 style={{marginLeft:"10px"}}>{product.price} руб.
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