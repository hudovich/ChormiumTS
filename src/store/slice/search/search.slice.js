import { createSlice } from "@reduxjs/toolkit";
import { getSearchProduct } from "./search.action"

const initialState = {
  result:[],
  isLoading: '',
  error: '',
}

export const Search = createSlice({
  name: "search",
  initialState,
  reducer:{},
  extraReducers: builder => {
    builder
      .addCase(getSearchProduct.pending, state =>{
        state.isLoading = true;
      })
      .addCase(getSearchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.result = action.payload
      })
      .addCase(getSearchProduct.rejected, (state, action)=>{
        console.log(action);
        state.isLoading = false;
        state.error = action.error.message
        state.result = []
      })
  }
})

export const { actions, reducer } = Search