import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./products.action";

const initialState = {
  post:null,
  isLoading: false,
  error: '',
} 

export const Products = createSlice({
  name:'Product',
  initialState,
  reducer:{},
  extraReducers: builder => {
    builder
      .addCase(getProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
        state.post = []
      })
  }
});

export const {actions, reducer} = Products