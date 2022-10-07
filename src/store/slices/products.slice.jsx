import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsloading } from './isLoading.slice';
export const producstSlice = createSlice({
    name: 'products',
    initialState:[],
    reducers: {
        setProducts:(state,action)=>{
            const products = action.payload;
            return products
        }

    }
})
export const getProductsThunk= ()  => dispatch =>{
    dispatch(setIsloading(true))
   axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products") 
   .then(res=>dispatch(setProducts(res.data.data.products)))
   .finally(()=> dispatch(setIsloading(false)))

}




export const { setProducts  } = producstSlice.actions;

export default producstSlice.reducer;
