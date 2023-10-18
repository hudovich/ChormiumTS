import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_URL } from "../../const"

export const getBlog = createAsyncThunk(
  'blog',
  async(thunkApi)=>{
    try{
      const response = await fetch(`${API_URL}blog`)
      let json = response.json()
      return json
    }
    catch(error){
      thunkApi.rejectWithValue(error)
    }
  }
)