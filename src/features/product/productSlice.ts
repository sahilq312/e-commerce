import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Key } from 'react'
import api from "../../app/Axios"
export interface PRODUCT {
    _id: Key | null | undefined
    title: string,
    thumbnail : string,
    price: number,
    description : string,
    brand: string,
    category: string,
    rating: number
}
interface ProductState {
    products : PRODUCT[],
    status: string,
    selectedProduct : null | PRODUCT
}
export const fetchProduct = createAsyncThunk('product/fetch', async()=> {
    const response = await api.get('http://localhost:3000/product');
    return response.data;
})
export const fetchProductById = createAsyncThunk('product/fetchById', async(id:string| undefined)=> {
    const resposne = await api.get(`http://localhost:3000/product//${id}`)
    return resposne.data;
})

const initialState : ProductState = {
    products: [],
    status: "idle",
    selectedProduct: null,
  };


  export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder
        .addCase(fetchProduct.pending, (state)=> {
            state.status = "loading"
        })
        .addCase(fetchProduct.fulfilled, (state, action)=> {
            state.status = "idle"
            state.products = action.payload
        })
        .addCase(fetchProductById.pending, (state)=> {
            state.status = "loading";
        })
        .addCase(fetchProductById.fulfilled, (state, action)=> {
            state.status = "loading";
            state.selectedProduct = action.payload;
        })
    }
  })
const productReducer = productSlice.reducer
export default productReducer;
