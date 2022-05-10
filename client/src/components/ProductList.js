import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import { Context } from '..';
import ProductItem from './ProductItem'

const ProductList = observer( () => {
    const {productt} = useContext(Context)
    return (
        <Row className='d-flex'>
            {productt.productts.map(productt =>
                <ProductItem key={productt.id} productt={productt}/>
            )}
        </Row>
    );
});

export default ProductList;