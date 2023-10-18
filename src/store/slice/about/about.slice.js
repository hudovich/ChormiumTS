import { createSlice } from "@reduxjs/toolkit";
import { getAbout } from "./about.action";

const initialState = {
  post:[
    {id:'3', name:'THE CHROMIUM FEATURES',description:'The more we drive the car the better they seem to operate. No noise, just stopping power!', images:'https://excelhack.ru/wp-content/uploads/2017/09/%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA-%D0%B2-excel-%D0%BD%D0%B0-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B5-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B-%D0%B4%D0%B2%D0%B0-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%BA%D0%B0.jpg'},
  ],
  isLoading: false,
  error: '',
}

export const About = createSlice({
  name: 'about',
  initialState,
  reducer:{},
  extraReducers: builder => {
    builder
      .addCase(getAbout.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAbout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload
      })
      .addCase(getAbout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message
        state.post = []
      }) 
  }
});
