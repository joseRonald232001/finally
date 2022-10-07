import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
    name: 'loading',
    initialState:false,
    reducers: {
            setIsloading:(state,action)=> {
                const isLoading=action.payload;
                return isLoading
            }
    }
})

export const { setIsloading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
