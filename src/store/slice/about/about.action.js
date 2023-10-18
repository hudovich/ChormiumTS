import { createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL } from '../../const'

export const getAbout = createAsyncThunk(
  'about',
  async(thunkApi)=>{
    try{
      const response = await fetch(`${API_URL}about`);
      let json = response.json()
      return json
    }
    catch(error){
      thunkApi.rejectWithValue(error)
    }
  }
)