import React, { useContext } from 'react';
import {Context} from "../index"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {Button, Image} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import {useNavigate} from "react-router-dom"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()
    const redirect = path => {
        history(path);
      };
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <NavLink style={{color:'white'}} to={SHOP_ROUTE}>ПоставьтеПятьПожалуйста</NavLink>
            {user.isAuth ?
             <Nav className="ml-auto" style={{color:'white'}}>
                <Image style={{marginRight:'20px', cursor:'pointer'}} onClick={() => redirect(BASKET_ROUTE)} widh={35} height={35} src={"https://nusasurfwear.com/images/icon-cart.png"}/>
                <Button variant={'outline-light'} onClick={() => redirect(ADMIN_ROUTE)}>Добавить</Button>
                <Button variant={'outline-light'} style={{marginLeft:'20px'}} onClick={() => redirect(LOGIN_ROUTE)}>Выйти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
            </Nav>
            }
            </Container>
        </Navbar>
    );
});

export default NavBar;