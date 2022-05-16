import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import { Context } from '..';
import ProductItem from './ProductItem'

const ProductList = observer( () => {
    const {producttt} = useContext(Context)
    return (
        <Row className='d-flex'>
            {producttt.producttts.map(producttt =>
                <ProductItem key={producttt.id} producttt={producttt}/>
            )}
        </Row>
    );
});

export default ProductList;