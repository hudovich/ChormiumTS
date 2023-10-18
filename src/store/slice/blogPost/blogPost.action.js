import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const getBlogPost = createAsyncThunk (
  'blogPost',
  async(action, thunkApi)=>{
    try{
      const response = await fetch(`${API_URL}blog/${action}`)
      let json = response.json()
      return json
    }
    catch(error){
      thunkApi.rejectWithValue(error)
    }
  }
)