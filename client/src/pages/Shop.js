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
    const {producttt} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => producttt.setTypes(data))
        fetchGeners().then(data => producttt.setGeners(data))
        fetchProducts(null, null, 1, 4).then(data => {
            producttt.setProducts(data.rows)
            producttt.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProducts(producttt.selectedType.id, producttt.selectedGener.id, producttt.page, 4).then(data => {
            producttt.setProducts(data.rows)
            producttt.setTotalCount(data.count)
        })
    }, [producttt.page, producttt.selectedType, producttt.selectedGener])

    return (
        <Container>
            <Row className='mt-2'> 
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    {/* <Search /> */}
                    <GenerBar />
                    <ProductList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;