import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../app/Axios"

/* export const registerUserAsync = createAsyncThunk("/auth/register",async(userData) => {
    const response = await fetch("http://localhost:3000/auth/register", {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {'content-type' : 'appication/json'},
    })
    const data = response.json();
    return data;
}) */
export const registerUserAsync = createAsyncThunk('/auth/register', async (userData) => {
    
      const response = await api.post('http://localhost:3000/auth/register', userData, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    
  });

export interface USERDATA {
    email : string
    password : string
}


export const loginUserAsync = createAsyncThunk("/auth/login",async(userData: USERDATA) => {
    const response = await api.post("http://localhost:3000/auth/login",userData, {
        headers: {'content-type' : 'application/json'},
    })
    
    return response.data;
})

export const logoutUserAync = createAsyncThunk("/logout",async (userData : USERDATA) => {
    const response = await api.post("/auth/logout", userData, {
        headers: {'content-type' : 'application/json'},
    })    
    return response.data;
})

export const checkAuthAsync = createAsyncThunk("/checkAuth",async () => {
    const response = await api.post("/auth/check")
    return response.data;
    console.log(response);
    
    
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
            .addCase(checkAuthAsync.fulfilled, (state, action)=>{
                state.status = "idle";
                state.loggedInUserToken = action.payload
                state.userChecked = true;
            })
            .addCase(checkAuthAsync.rejected, (state)=> {
                state.userChecked = false
            })
    }
})

export default authSlice.reducer