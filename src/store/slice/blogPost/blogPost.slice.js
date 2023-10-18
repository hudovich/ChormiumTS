import { createSlice } from "@reduxjs/toolkit"
import { getBlogPost } from "./blogPost.action"

const initialState = {
  post:{},
  isLoading: false,
  error: '',
}

export const blogPost = createSlice({
  name:'blogPost',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(getBlogPost.pending, state => {
        state.isLoading = true;
      })
      .addCase(getBlogPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload
      })
      .addCase(getBlogPost.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.error.message
        state.post = {}
      })

  }
})

export const {actions, reducer} = blogPost