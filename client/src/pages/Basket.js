import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import BuyProduct from "../components/models/BuyProduct";
import {useNavigate} from "react-router-dom"

const Basket = () => {
  const [BuyProductVisible, setBuyProductVisible] = useState(false);

  return (
    <div>
      <Table
        style={{ width: "1200px", marginLeft: "170px" }}
        className="mt-3"
        striped
        bordered
        hover
      >
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Исполнитель</th>
            <th>Автор</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Сборник №1</td>
            <td>Фредерик Шопен</td>
            <td>Фредерик Шопен</td>
            <td>500руб.</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Вернуться</td>
            <td>Екатерина Яшникова</td>
            <td>Екатерина Яшникова</td>
            <td>400руб.</td>
          </tr>
        </tbody>
      </Table>
      <h3 style={{ marginLeft: "1175px" }}>Итого: 900руб.</h3>
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
