import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const getCategory = createAsyncThunk(
  'Category',
  async(catId, thunkApi)=>{
    try{
      const response = await fetch(`${API_URL}category`)
      const responseProduct = await fetch(`${API_URL}product?category=${catId}`)
      let products = await responseProduct.json();
      let json = await response.json(); 
      return {json, products}
    }
    catch(error){
      thunkApi.rejectWithValue(error)
    }
  }
)