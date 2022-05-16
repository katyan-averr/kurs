import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '..';
import { registration, loginn } from '../http/userAPI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()
    const redirect = path => {
        history(path);
      };

    const click = async () => {
        try{
            let data;
            if (isLogin){
                data = await loginn(login, password)
            }else{
                data = await registration(login, password)
            }
            user.setUser(user)
            user.setIsAuth(true) 
            redirect(SHOP_ROUTE) 
        }catch (e){
            alert(e.response.data.message)
        }
        
    }

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
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <Form.Control 
                        className='mt-3'
                        placeholder='Введите пароль...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        <Button variant={'outline-success'} onClick={click}>{isLogin ? 'Войти' : 'Регистрация'}</Button>
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
});

export default Auth;