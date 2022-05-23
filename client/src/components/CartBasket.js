import React, { useContext } from "react";
import { Card , Col, Image, Row} from "react-bootstrap";
import { Context } from "..";

export const CartBasket = ({name, author, price, img}) => {
    const {producttt} = useContext(Context)
    return(
        <Card style ={{width: 200, cursor:'pointer', marginLeft:"50px"}} border={"black"}>
                <Image style={{marginLeft:"-13px"}} width={200} height={200} src={process.env.REACT_APP_API_URL + img}/>
                <div className='text-black-50 d-flex justify-content-between align-items-center'>
                    <div>{author}</div>
                    
                </div>
                <div className=' d-flex justify-content-between align-items-center'>
                    <div>{name}</div>
                    <div>{price} руб.</div>
                </div>
            </Card>
    )
}