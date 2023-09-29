import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import api from "../../app/Axios"
import {Key} from 'react'



export const fetchCart = createAsyncThunk("cart/fetch",async () => {
    const response = await api.get("/cart/fetchcart");
    return response.data;
    
})

export const addToCart = createAsyncThunk("cart/add",async (item : CART) => {
    const response = await api.post("/cart/add", item, {
        headers: {'content-type' : 'application/json'}
    })
    console.log(item);
    
    return response.data;
})

export const deleteFromCart = createAsyncThunk("cart/delete", async(productId : string)=> {
    const resposne = await api.delete(`/cart/${productId}`)
    return resposne.data;
})

export interface CART {
    productId : Key | string | null | undefined
    quantity: number
}

interface CARTITEM {
    _id: string;
    userId: string;
    productId: {
        _id: string;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        __v: number;
    };
    quantity: number;
    __v: number;
}


interface CartState {
    items : CARTITEM[],
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