import { createSlice } from "@reduxjs/toolkit";
import { getLogin, getAutorization } from "./user.action";

const initialState = {
  user:'',
  token:'',
  isLoading:false,
  error: false,
}

export const User = createSlice({
  name:'user',
  initialState,
  reducers:{
    exitUser: (state)=>{
      state.user = ''
      state.token = ''
      localStorage.removeItem('token')
      localStorage.removeItem('idUser')
    }
  },
  extraReducers: builder => {
    builder
    .addCase(getLogin.pending, state=>{
      state.isLoading = true;
    })
    .addCase(getLogin.fulfilled, (state, action) => {
      debugger
      if(action.payload == undefined || typeof(action.payload) == 'string'){
        state.error = true;
      }else{
        state.user = action.payload.user
        state.token = action.payload.accessToken
        localStorage.token = action.payload.accessToken;
        localStorage.idUser = action.payload.user.id;
        state.error = false;
      }
      state.isLoading = false;
      
    })
    .addCase(getLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.user = []
    })
    .addCase(getAutorization.pending, state=>{
      state.isLoading = true;
    })
    .addCase(getAutorization.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    })
    .addCase(getAutorization.rejected, (state) => {
      state.isLoading = false;
      state.user = []
    })
  }
})

export const { actions, reducer } = User;