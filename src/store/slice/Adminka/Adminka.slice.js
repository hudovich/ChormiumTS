import { createSlice } from "@reduxjs/toolkit";
import { createPostAdminka, dellPostAdminka, getAdminkaDate, getEditAdminkaPost } from "./Adminka.action";

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

      .addCase(getEditAdminkaPost.pending, state => {
        state.isLoading = true;
      })
      .addCase(getEditAdminkaPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getEditAdminkaPost.rejected, state => {
        state.isLoading = false;
        state.error = true;
        state.data = "";
      })

      .addCase(createPostAdminka.pending, state => {
        state.isLoading = true;
      })
      .addCase(createPostAdminka.fulfilled, state => {
        state.isLoading = false;
        console.log('ok')
      })
      .addCase(createPostAdminka.rejected, state => {
        state.isLoading = false;
        console.log('error create post')
      })

      .addCase(dellPostAdminka.pending, state => {
        state.isLoading = true;
      })
      .addCase(dellPostAdminka.fulfilled, state=>{
        state.isLoading = false;
        console.log("delete ok")
      })
      .addCase(dellPostAdminka.rejected, state=>{
        state.isLoading(false);
        console.log("delete error")
      })
})

export const {actions, reducer} = Adminka;