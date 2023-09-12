import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { PRODUCT } from "../product/productSlice"



export const fetchCart = createAsyncThunk("cart/fetch",async () => {
    const resposne = await fetch("https://dummyjson.com/products")
    const data = await resposne.json();
    return data.products;
})




interface CartState {
    items : PRODUCT[],
    status : string,
    cartLoaded : boolean
}
const initialState : CartState = {
    items : [],
    status: "idle",
    cartLoaded: false
}
export const cartlice = createSlice({
    name: "cart",
    initialState,
    reducers:{},
    extraReducers:(builder)=> {
        builder
        .addCase(fetchCart.pending, (state)=> {
            state.status = "loading";
        })
        .addCase(fetchCart.fulfilled, (state, action)=> {
            state.status = "idle";
            state.items  = action.payload;
        })
    }
})

const cartReducer = cartlice.reducer;
export default cartReducer;