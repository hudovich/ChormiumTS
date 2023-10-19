import { createSlice } from "@reduxjs/toolkit";
import { postUser } from "./regist.action"
const initialState = {
  isLoading:'',
  error:'',
  success:'',
}
export const Register = createSlice({
  name:'registration',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(postUser.pending, state=>{
        console.log('загрузка')
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = action.payload;
        console.log('Успех')
      })
      .addCase(postUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
        state.success = []
        console.log('Ошибка')
      })
  }
})

export const {actions, reducer} = Register