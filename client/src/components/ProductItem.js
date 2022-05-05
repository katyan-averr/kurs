import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"
import { PRODUCT_ROUTE } from '../utils/consts';

const ProductItem =  ({product}) => {
    const history = useNavigate()
    const redirect = path => {
        history(path);
      };
    return (
        <Col md={3} className={"mt-4"} onClick={() => redirect(PRODUCT_ROUTE + '/' + product.id)}>
            <Card style ={{width: 150, cursor:'pointer'}} border={"black"}>
                <Image width={150} height={150} src={product.img}/>
                <div className='text-black-50 d-flex justify-content-between align-items-center'>
                    <div>{product.author}</div>
                    
                </div>
                <div className=' d-flex justify-content-between align-items-center'>
                    <div>{product.name}</div>
                    <div>{product.price} руб.</div>
                </div>
                
            </Card>
        </Col>
    );
};

export default ProductItem;