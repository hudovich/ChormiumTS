import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const getSliderHeader = createAsyncThunk(
  'sliderHeader',
  async(thunkApi)=>{
    try{
      const response = await fetch(`${API_URL}sliderHome`)
      let json = response.json()
      return json
    }
    catch(error){
      thunkApi.rejectWithValue(error);
    }
  }
)