import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const getAdvantages = createAsyncThunk(
  'advantages',
  async(thunkApi)=>{
    try{
      const response = await fetch(`${API_URL}advantages`)
      let json = response.json()
      return json
    }
    catch(error){
      thunkApi.rejectWithValue(error);
    }
  }
)