import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const getAdminkaDate = createAsyncThunk(
  'getAdminkaDate',
  async(actions, thunkApi)=>{
    try{
      const response = await fetch (`${API_URL}${actions.url}`,{
        method: "GET",
        headers: {
          "Content-Type":"application/json" 
        }
      });
      const json = await response.json()
      return(json)
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)