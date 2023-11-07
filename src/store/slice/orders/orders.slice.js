import { createSlice } from "@reduxjs/toolkit";
import { createOrder, getOrders } from "./orders.action";

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
      
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        debugger
        state.isLoading = false;
        if(action.payload.length){
          state.orders = action.payload[0].orders
        }
      })
      .addCase(getOrders.rejected, (state) => {
        state.error = true;
      })
}) 

export const {actions, reducer} = Orders;