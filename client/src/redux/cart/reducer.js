import {createSlice} from "@reduxjs/toolkit"
import { useContext } from "react";
import { Context } from "../..";

// const {producttt} = useContext(Context)

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsInCart: []
    },
    reducers: {
        setItemInCart: (state, action) => {
            state.itemsInCart.push(action.payload)
        },
        deleteItemFromCart: (state, action) =>{
            state.itemsInCart = state.itemsInCart.filter(producttt => producttt.id !== action.payload)
        }
    }
});

export const { setItemInCart, deleteItemFromCart} = cartSlice.actions;
export default cartSlice.reducer;