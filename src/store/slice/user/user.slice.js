import { createSlice } from "@reduxjs/toolkit";
import { getLogin, getAutorization } from "./user.action";

const initialState = {
  user:'',
  token:'',
  isLoading:false,
  error: '',
}

export const User = createSlice({
  name:'user',
  initialState,
  reducers:{
    exitUser: (state)=>{
      state.user = ''
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  extraReducers: builder => {
    builder
    .addCase(getLogin.pending, state=>{
      state.isLoading = true;
    })
    .addCase(getLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user
      state.token = action.payload.accessToken
      localStorage.token = action.payload.accessToken;
      localStorage.idUser = action.payload.user.id;
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