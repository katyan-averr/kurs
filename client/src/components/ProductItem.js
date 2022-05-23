import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"
import { PRODUCT_ROUTE } from '../utils/consts';

const ProductItem =  ({producttt}) => {
    const history = useNavigate()
    const redirect = path => {
        history(path);
      };
    return (
        <Col md={3} className={"mt-4"} onClick={() => redirect(PRODUCT_ROUTE + '/' + producttt.id)}>
            <Card style ={{width: 230, cursor:'pointer'}} border={"black"}>
                <Image width={229} height={229} src={process.env.REACT_APP_API_URL + producttt.img}/>
                <div className='text-black-50 d-flex justify-content-between align-items-center'>
                    <div>{producttt.author}</div>
                    
                </div>
                <div className=' d-flex justify-content-between align-items-center'>
                    <div>{producttt.name}</div>
                    <div>{producttt.price} руб.</div>
                </div>
                
            </Card>
        </Col>
    );
};

export default ProductItem;