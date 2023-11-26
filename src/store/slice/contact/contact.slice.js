import { createSlice } from "@reduxjs/toolkit";
import { createContact, dellContact } from './contact.action'

const initialState = {
  fulfilled: false,
  isLoading: false,
  error: false,
}

export const Contact = createSlice({
  name:'contact',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(createContact.pending, state =>{
        state.isLoading = true;
      })
      .addCase(createContact.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.fulfilled = true;
      })
      .addCase(createContact.rejected, state =>{
        state.isLoading = false;
        state.error = true;
      })

      .addCase(dellContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(dellContact.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.fulfilled = true;
      })
      .addCase(dellContact.rejected, state =>{
        state.isLoading = false;
        state.error = true;
      })
  }
})

export const {actions, reducer} = Contact;