import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUserAsync = createAsyncThunk("/auth/register",async(userData) => {
    const response = await fetch("http://localhost:3000/auth/register", {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {'content-type' : 'appication/json'}
    })
    const data = response.json();
    return data;
})

export interface USERDATA {
    email : string
    password : string
}


export const loginUserAsync = createAsyncThunk("/auth/login",async(userData: USERDATA) => {
    const response = await fetch("http://localhost:3000/auth/login", {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {'content-type' : 'application/json'}
    })
    const data = await response.json();
    return data;
})

export const logoutUserAync = createAsyncThunk("/logout",async (userData) => {
    const response = await fetch("http://localhost:3000/auth/logout", {
        method: "POST",
        body: JSON.stringify(userData),
        headers : {
            
        },
        
    })
    const data = response.json();
    return data;
})

export const checkAuthAsync = createAsyncThunk("/checkAuth",async () => {
    const response = await fetch("http://localhost:3000/auth/checkAuth")
    const data = response.json();
    return data;
})


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
    extraReducers : (builder) => {
        builder
            .addCase(loginUserAsync.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loginUserAsync.fulfilled, (state, action) => {
                state.status = "idle";
                state.loggedInUserToken = action.payload;
            })
            .addCase(registerUserAsync.pending, (state)=> {
                state.status = "loading";
            })
            .addCase(registerUserAsync.fulfilled, (state, action)=> {
                state.status = "idle";
                state.loggedInUserToken = action.payload;
            })
            .addCase(logoutUserAync.pending, (state)=> {
                state.status = "loading"
            })
            .addCase(logoutUserAync.fulfilled, (state)=> {
                state.status = "idle";
                state.loggedInUserToken = null;
            })
            .addCase(checkAuthAsync.pending, (state)=> {
                state.status = "loading";
            })
            .addCase(checkAuthAsync.fulfilled, (state)=>{
                state.status = "idle";
                state.userChecked = true;
            })
    }
})

export default authSlice.reducer