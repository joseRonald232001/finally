import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from './slices/cart.slice'
import  isLoadingSlice  from './slices/isLoading.slice'
import  producstSlice  from './slices/products.slice'
import  purchasesSlice  from './slices/purchases.slice'

export default configureStore({
    reducer: {
        isLoading:isLoadingSlice
        ,
        producstSlice:producstSlice
        ,
        purchasesSlice:purchasesSlice
        ,
        cartSlice:cartSlice
    }
})
