import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Card, Col, Image } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { fetchOneProduct} from '../http/productAPI';
import AddBasket from "../components/models/AddBasket";
import { useDispatch } from 'react-redux';
import { setItemInCart } from '../redux/cart/reducer';

const ProductPage = () => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.stopPropagation();
        dispatch(setItemInCart(producttt));
    }
    const [AddBasketVisible, setAddBasketVisible] = useState(false);
    const [producttt, setProduct] = useState({info: []})
    const {id} = useParams()
        useEffect(() =>{
            fetchOneProduct(id).then(data => setProduct(data))
        }, [])
    return (
        <Container>
            <Row >
            <Col md={6} className='mt-5'>
                <Image widh={500} height={500} src={process.env.REACT_APP_API_URL + producttt.img}/>
                
            </Col>
            <Col md={6} className='mt-5'>
                <Card style={{fontFamily:"Comic Sans MS"}} className='mr-3 d-flex flex-column justify-content-around '>
                    <div style={{marginLeft:"10px", marginTop:"10px"}}>
                        <h1>Название: {producttt.name}</h1>
                        <h3>Исполнитель: {producttt.artist}</h3>
                        <h3>Автор: {producttt.author}</h3>
                        <h3>Тип носителя: Диски</h3>
                        <h3>Жанр: Джаз</h3>
                        <h3>Описание: {producttt.descrip}</h3>
                    </div>
                    <Card style={{marginTop:"100px"}} className='mr-3 d-flex flex-column justify-content-around '>
                        <div>
                            <h2 style={{marginLeft:"10px"}}>{producttt.price} руб.
                            <Button style={{marginLeft:"390px"}} variant='outline-dark' onClick={handleClick}>В корзину</Button></h2>
                            <AddBasket show={AddBasketVisible} onHide={() => setAddBasketVisible(false)}/>
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