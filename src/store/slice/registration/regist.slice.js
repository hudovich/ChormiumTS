import { createSlice } from "@reduxjs/toolkit";
import { postUser } from "./regist.action"
const initialState = {
  isLoading:false,
  error:'',
  success:false,
}
export const Register = createSlice({
  name:'registration',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(postUser.pending, state=>{
        state.isLoading = true;
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(postUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
        state.success = ''
      })
  }
})

export const {actions, reducer} = Register