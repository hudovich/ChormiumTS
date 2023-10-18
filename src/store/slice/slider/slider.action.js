import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const getSlider = createAsyncThunk(
  'slider',
  async(thunkApi)=>{
    try{
      const responce = await fetch(`${API_URL}slider`);
      let slider = await responce.json()
      return slider
    }
    catch(error){
      thunkApi.rejectWithValue(error)
    }
  }
)

export const getPostSlider = createAsyncThunk(
  'slider_post',
  async(id, thunkApi)=>{
    try{
      const responce = await fetch(`${API_URL}product?category=${id}`);
      let product = await responce.json()
      return {product, id}
    }
    catch(error){
      thunkApi.rejectWithValue(error)
    }
  }
)