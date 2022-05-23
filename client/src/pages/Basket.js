import React, { useContext, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import BuyProduct from "../components/models/BuyProduct";
import {useNavigate} from "react-router-dom"
import { useSelector } from "react-redux";
import { Context } from "..";
import { CartBasket } from "../components/CartBasket";

const Basket = () => {
    const {producttt} = useContext(Context)
    const [BuyProductVisible, setBuyProductVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = items.reduce((acc, producttt) => acc += producttt.price, 0)
  return (
    <div>
        {
           
        }
        <Container>
            <Row className='mt-2'> 
                <Col md={12}>
                    <Row className="mt-3">
                    {
                     items.length > 0 ? items.map(producttt => <CartBasket key={producttt.name} price={producttt.price} name={producttt.name} author={producttt.author} id={producttt.id} img={producttt.img}/>) : 'Корзина пуста'
                    }
                    </Row>
                </Col>
            </Row>
        </Container>


      <h3 style={{ marginLeft: "1175px" }}>Итого: { totalPrice } руб.</h3>
      <Button
        style={{ marginLeft: "1223px" }}
        onClick={() => setBuyProductVisible(true)}
      >
        Оформить заказ
      </Button>
      <BuyProduct
        show={BuyProductVisible}
        onHide={() => setBuyProductVisible(false)}
      />
    </div>
  );
};

export default Basket;
