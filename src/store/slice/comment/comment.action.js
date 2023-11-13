import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const getComment = createAsyncThunk(
  'getComment',
  async(action, thunkApi)=>{
    try{
      const response = await fetch(`${API_URL}comments?productId=${action}`,{
        method: "GET",
        headers: {
          "Content-Type":"application/json"
        }
      })
      let json = await response.json()
      return(json)
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)

export const createComment = createAsyncThunk(
  'createComment',
  async(action, thunkApi)=>{
    debugger
    try{
      const response = await fetch(`${API_URL}comments`,{
        method: "POST",
        body: JSON.stringify(action),
        headers: {
          "Content-Type":"application/json"
        }
      })
      let json = await response.json()
      return(json)
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)