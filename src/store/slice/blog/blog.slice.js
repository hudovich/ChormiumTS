import { createSlice } from "@reduxjs/toolkit";
import { getBlog } from './blog.action'

const initialState = {
  post:[
    {id:'1',name:'Стартавой блог',author:'Автор', images:'https://s0.rbk.ru/v6_top_pics/media/img/7/25/346857125405257.jpg', subDescription:'Короткое описание', description:'Описания1',},
  ],
  isLoading: false,
  error: '',
}

export const Blog = createSlice({
  name: 'Blog',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(getBlog.pending, state => {
        state.isLoading = true
      })
      .addCase(getBlog.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.post = action.payload
      })
      .addCase(getBlog.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.error.message
        state.post = []
      })
  }
});

export const {actions, reducer} = Blog