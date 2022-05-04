import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container 
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 79}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control 
                        className='mt-3'
                        placeholder='Введите логин...'
                    />
                    <Form.Control 
                        className='mt-3'
                        placeholder='Введите пароль...'
                    />
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        <Button variant={'outline-success'}>{isLogin ? 'Войти' : 'Регистрация'}</Button>
                        {isLogin ?
                        <div>
                            <NavLink to={REGISTRATION_ROUTE}> Зарегистрироваться</NavLink>
                        </div>
                        :
                        <div>
                            <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                        </div>
                        }
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;