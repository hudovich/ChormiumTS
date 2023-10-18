import { createSlice } from "@reduxjs/toolkit";
import { getGallery } from "./gallery.action";

const initialState = {
  post:[
    {id:'1',images:'https://avatars.mds.yandex.net/get-vertis-journal/3934100/2020-02-05-01473b316f4f4f4a9096ba0e29da473c.jpg_1622736151217/orig'},
  ],
  isLoading: false,
  error: '',
}

export const Gallary = createSlice({
  name: 'Gallary',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(getGallery.pending, state => {
        state.isLoading = true;
      })
      .addCase(getGallery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload
      })
      .addCase(getGallery.rejected, (state, action)=>{
        console.log(action);
        state.isLoading = false;
        state.error = action.error.message
        state.post = []
      })
  }
});

export const {actions, reducer} = Gallary