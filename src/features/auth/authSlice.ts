import { createSlice } from "@reduxjs/toolkit";

export interface AUTH {
    loggedInUserToken : null ,
    status : string,
    error : null | string ,
    userChecked : boolean
}

const initialState : AUTH  =  {
    loggedInUserToken : null,
    status : "idle",
    error : null,
    userChecked : false
}


const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {},
    extraReducers : {}
})

export default authSlice.reducer