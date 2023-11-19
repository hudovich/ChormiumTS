import { createSlice } from "@reduxjs/toolkit";
import { createOrder, getOrders, appDateOrder} from "./orders.action";

const initialState = {
  orders:[],
  status: false,
  error: false,
  isLoading: false,
}

export const Orders = createSlice({
  name: 'Orders',
  initialState,
  reducers: {},
  extraReducers: builder => 
    builder
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.isLoading = false;
        state.status = true;
      })
      .addCase(createOrder.rejected, (state) => {
        state.error = true;
      })

      .addCase(appDateOrder.pending, (state)=>{
        state.isLoading = true;
      })
      .addCase(appDateOrder.fulfilled, (state)=>{
        state.isLoading = false;
      })
     .addCase(appDateOrder.rejected, (state)=>{
        state.isLoading = false;
        state.error = true;
      })
      
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        if(action.payload.length){
          state.orders = action.payload;
        }
      })
      .addCase(getOrders.rejected, (state) => {
        state.error = true;
      })
}) 

export const {actions, reducer} = Orders;