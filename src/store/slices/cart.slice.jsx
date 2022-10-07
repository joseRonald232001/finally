import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsloading } from './isLoading.slice';

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState:[],
    reducers: {
        setCart:(state, action)=>{
            const cart = action.payload
            return cart
        }

    }
})
export const getCarThunk = () => (dispatch) => {
    dispatch(setIsloading(true));
    return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/cart",getConfig())
        .then((res) => dispatch(setCart(res.data.data.cart.products)))
        .finally(() => dispatch(setIsloading(false)));
}

export const {  setCart} = cartSlice.actions;

export default cartSlice.reducer;
