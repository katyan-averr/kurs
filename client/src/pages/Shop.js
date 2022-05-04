import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import ProductList from '../components/ProductList';

const Shop = () => {
    return (
        <Container>
            <Row className='mt-2'> 
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <ProductList />
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;