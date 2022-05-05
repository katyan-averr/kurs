import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateProduct from '../components/models/CreateProduct';
import CreateType from '../components/models/CreateType';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-4 pt-2' onClick={() => setProductVisible(true)}>
                Добавить товар
            </Button> 
            <Button variant={'outline-dark'} className='mt-4 pt-2' onClick={() => setTypeVisible(true)}>
                Добавить тип
            </Button>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;