import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const getGallery = createAsyncThunk(
  'gallery',
  async(thunkApi)=>{
    try{
      const response = await fetch(`${API_URL}gallery`)
      let json = response.json()
      return json
    }
    catch(error){
      thunkApi.rejectWithValue(error)
    }
  }
)