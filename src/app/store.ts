import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/blogSlice'
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
    reducer: {
        counter : counterReducer,
        product : productReducer,
        cart : cartReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch