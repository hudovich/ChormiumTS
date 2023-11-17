import { createSlice } from "@reduxjs/toolkit";
import { getAdminkaDate } from "./Adminka.action";

const initialState = {
  data: '',
  isLoading: false,
  error: false,
}

export const Adminka = createSlice({
  name: "Adminka",
  initialState,
  reducer:{},
  extraReducers: builder => 
    builder
      .addCase(getAdminkaDate.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdminkaDate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getAdminkaDate.rejected, state => {
        state.isLoading = false;
        state.error = true;
        state.data = "";
      })
})

export const {actions, reducer} = Adminka;