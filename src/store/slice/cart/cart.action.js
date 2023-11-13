import { API_URL } from "../../const";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCart = createAsyncThunk(
  'cart',
  async(action, thunkApi) => {
    try{
      const response = await fetch( `${API_URL}cart?idUser=${action}`,{
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
      })
      let json = await response.json();
      return(json);
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)

export const appDateCartAPI = createAsyncThunk(
  'appDateCartAPI',
  async(action, thunkApi) => {
    debugger
    try{
      const response = await fetch(`${API_URL}cart/${action.idCart}`,{
        method:'PATCH',
        body: JSON.stringify({
          productList: (action.data)
        }),
        headers:{
          "Content-Type": "application/json"
        },
      })
      let json = await response.json();
      return(json);
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)

export const postCart = createAsyncThunk(
  'postCart',
  async(action, thunkApi) => {
    try{
      const response = await fetch(`${API_URL}cart`,{
        method:'POST',
        body: JSON.stringify(action),
        headers:{
          "Content-Type": "application/json"
        },
      })
      let json = await response.json();
      return(json);
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)