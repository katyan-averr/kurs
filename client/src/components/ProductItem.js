import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"
import { PRODUCT_ROUTE } from '../utils/consts';

const ProductItem =  ({productt}) => {
    const history = useNavigate()
    const redirect = path => {
        history(path);
      };
    return (
        <Col md={3} className={"mt-4"} onClick={() => redirect(PRODUCT_ROUTE + '/' + productt.id)}>
            <Card style ={{width: 191, cursor:'pointer'}} border={"black"}>
                <Image width={190} height={190} src={process.env.REACT_APP_API_URL + productt.img}/>
                <div className='text-black-50 d-flex justify-content-between align-items-center'>
                    <div>{productt.author}</div>
                    
                </div>
                <div className=' d-flex justify-content-between align-items-center'>
                    <div>{productt.name}</div>
                    <div>{productt.price} руб.</div>
                </div>
                
            </Card>
        </Col>
    );
};

export default ProductItem;