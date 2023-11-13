import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const getOrders = createAsyncThunk(
  'getOrders',
  async(action, thunkApi)=>{
    try{
      const response = await fetch(`${API_URL}orders?idUser=${action}`, {
        method: 'GET',
        headers:{
          "Content-Type": "application/json"
        },
      })
      let json = await response.json();
      return(json)
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)

export const appDateOrder = createAsyncThunk(
  'appDateOrder',
  async(action, thunkApi)=>{
    debugger
    try{
      const response = await fetch(`${API_URL}orders/${action.idUser}`,{
        method: 'PATCH',
        body: JSON.stringify({
          orders:action.data
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      let json = await response.json()
      return json;
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)

export const createOrder = createAsyncThunk(
  'createOrder',
  async(action, thunkApi)=>{
    try{
      const response = await fetch (`${API_URL}orders`, {
      method:'POST',
      body: JSON.stringify(action),
      headers:{
        "Content-Type": "application/json"
      },
      })
      let json = await response.json();
      return(json)
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)