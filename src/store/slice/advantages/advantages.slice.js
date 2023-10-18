import { createSlice } from "@reduxjs/toolkit"
import { getAdvantages } from "./advantages.action";

const initialState = {
  post:[
    {id:'1', images:'https://chromium.themes.zone/simple/wp-content/uploads/sites/2/2018/05/delivery-truck-1.png', name:'FREE DELIVERY', description:'Worldwide from $75',}
  ],
  isLoading: false,
  error: '',
}
export const advantagesSlice = createSlice({
  name: 'advantages',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(getAdvantages.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdvantages.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.post = action.payload;
      })
      .addCase(getAdvantages.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.error.message
        state.post = []  
      })
  }
});

export const {actions, reducer} = advantagesSlice