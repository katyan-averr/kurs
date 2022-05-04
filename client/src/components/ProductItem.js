import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Context } from '..';

const ProductItem = observer( (product) => {
    return (
        <Col md={3}>
            item
        </Col>
    );
});

export default ProductItem;