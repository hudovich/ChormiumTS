import { createSlice } from "@reduxjs/toolkit";
import { getPostSlider, getSlider } from "./slider.action";

const initialState = {
  post:[],
  products:[],
  isLoading: false,
  error: '',
}

export const Slider = createSlice({
  name: 'slider',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(getSlider.pending, state=>{
        state.isLoading = true
      })
      .addCase(getSlider.fulfilled, (state, action) =>{
        state.isLoading = false,
        state.post = action.payload
      })
      .addCase(getSlider.rejected, (state, action)=>{
        state.isLoading = false,
        state.post = [],
        state.error = action.error.message
      })
    builder
      .addCase(getPostSlider.fulfilled, (state, action) => {
        if(!state.products.some((e)=>e.id === action.payload.id)){
          state.products.push(action.payload);
        }
      })
      .addCase(getPostSlider.rejected, state => {
        state.products = []
      })
  }
});

export const {actions, reducer} = Slider