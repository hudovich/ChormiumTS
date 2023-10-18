import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from '../../const'

export const getProduct = createAsyncThunk(
  'Product', 
  async(idProduct, thunkApi)=>{
    try{
      const response = await fetch(`${API_URL}product/${idProduct}`) 
      let json = await response.json();
      return json
    }
    catch(error){
      thunkApi.rejectWithValue(error)
    }
  }
)