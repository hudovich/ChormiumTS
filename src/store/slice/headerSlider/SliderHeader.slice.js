import { createSlice } from "@reduxjs/toolkit";
import { getSliderHeader } from "./SliderHeader.action"

const initialState = {
  post:[
    {id:'1', name:'exciting bundle', description:'thos is most comprehensive vehicle treatment', category:'by from us & get your', images:'https://www.galferrussia.ru/images/galfer/bodegon-evo-r-series_v5.png', url:'10'},
    {id:'2', name:'shock absorbers lowrider', description:'Bigfoot signature detail. This is our most comprehensive vehicle treatment.', category:'get your', images:'https://www.autocentre.ua/wp-content/uploads/2016/06/zzz7.png', url:'11'},
  ],
  isLoading: false,
  error: '',
}

export const SliderHeader = createSlice({
  name: 'sliderHeader',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(getSliderHeader.pending, state => {
        state.isLoading = true;
      })
      .addCase(getSliderHeader.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.post = action.payload
      })
      .addCase(getSliderHeader.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.error.message
        state.post = []
      })
  }
});

export const {actions, reducer} = SliderHeader