import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
  user: {}
};
export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        login:(state,action)=>{
          state.user = action.payload
          state.isLoggedIn = true
        },
        logout:(state,action)=>{
            state.user = {}
            state.isLoggedIn=false;
        }
    }
})