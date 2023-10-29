import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const getWish = createAsyncThunk(
  'getWish',
  async(action, thunkApi) => {
    try{
      const response = await fetch(`${API_URL}wish?idUser=${action}`,{
        method: 'GET',
        headers: {
          "Content-type": "application/json"
        }
      })
      let json = await response.json();
      return(json);
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)

export const appDateWish = createAsyncThunk(
  'appDateWish',
  async(action, thunkApi) => {
    debugger
    try{
      const response = await fetch(`${API_URL}wish/${action.idWish}`,{
        method:'PATCH',
        body: JSON.stringify({
          wish: action.data
        }),
        header:{
          "Content-Type": "application/json"
        }
      })
      let json = await response.json();
      console.log(json)
      return(json);
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)