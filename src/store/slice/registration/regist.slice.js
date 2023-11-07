import { createSlice } from "@reduxjs/toolkit";
import { postUser } from "./regist.action"
const initialState = {
  user:'',
  token:'',
  isLoading:false,
  error:'',
  success:false,
}
export const Register = createSlice({
  name:'registration',
  initialState,
  reducers:{
    targetSuccess: (state) => {
      state.success = false;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(postUser.pending, state=>{
        state.isLoading = true;
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.accessToken;
        state.success = true;
        state.user = action.payload.user
        localStorage.token = action.payload.accessToken;
        localStorage.idUser = action.payload.user.id;
      })
      .addCase(postUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
        state.success = ''
      })
  }
})

export const {actions, reducer} = Register