import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const postUser = createAsyncThunk(
  'registration',
  async(date, thunkApi) => {
    debugger
    try{
      const response = await fetch(`${API_URL}users`,{
        method: 'POST',
        body: JSON.stringify(date),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let json = await response.json();
      return json
    }
    catch(error){
      thunkApi.rejectWithValue(error)
    }
  }
)