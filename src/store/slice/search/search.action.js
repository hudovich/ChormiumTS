import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const getSearchProduct = createAsyncThunk(
  'search',
  async(action, thunkApi)=>{
    try{
      const response = await fetch(`${API_URL}product?q=${action}`);
      let json = response.json()
      return json
    }catch(error){
      thunkApi.rejectWithValue(error)
    }
  }
)