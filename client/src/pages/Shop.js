import React, { useContext, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import GenerBar from '../components/GenerBar';
import Search from '../components/Search';
import ProductList from '../components/ProductList';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchGeners, fetchProducts, fetchTypes } from '../http/productAPI';
import Pages from '../components/Pages';


const Shop = observer(() => {
    const {productt} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => productt.setTypes(data))
        fetchGeners().then(data => productt.setGeners(data))
        fetchProducts(null, null, 1, 4).then(data => {
            productt.setProducts(data.rows)
            productt.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProducts(productt.selectedType.id, productt.selectedGener.id, productt.page, 4).then(data => {
            productt.setProducts(data.rows)
            productt.setTotalCount(data.count)
        })
    }, [productt.page, productt.selectedType, productt.selectedGener])

    return (
        <Container>
            <Row className='mt-2'> 
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <Search />
                    <GenerBar />
                    <ProductList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;