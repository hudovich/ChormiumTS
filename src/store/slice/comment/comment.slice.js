import { createSlice } from "@reduxjs/toolkit"
import { getComment } from "./comment.action";

const initialState = {
  comment:[],
  isLoading: false,
  error: false,
}

export const CommentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(getComment.pending, state => {
        state.isLoading = true;
      })
      .addCase(getComment.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.comment = action.payload
      })
      .addCase(getComment.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
  }
})

export const {actions, reducer} = CommentSlice