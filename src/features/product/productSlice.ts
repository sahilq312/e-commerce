import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export interface PRODUCT {
    id : string,
    title: string,
    thumbnail : string,
    price: number
}
interface ProductState {
    products : PRODUCT[],
    status: string,
    selectedProduct : null | PRODUCT
}
export const fetchProduct = createAsyncThunk('product/fetch', async()=> {
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json();
    return data.products;
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
    }
  })
const productReducer = productSlice.reducer
export default productReducer;
