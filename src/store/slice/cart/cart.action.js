import { API_URL } from "../../const";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCart = createAsyncThunk(
  'cart',
  async(thunkApi, action)=>{
    try{
      const responce = await fatch(`${API_URL}/${action.userID}/${action.cart}`)
      let json = responce.json()
      return(json)
    }
    catch(error){
      thunkApi.rejectWithValue(error);
    }
  }
)

export const putCart = createAsyncThunk(
  'putCart',
  async(thunkApi) => {
    try{
      let cart = JSON.parse(localStorage.cart)
      const response = await fetch( `${API_URL}cart`,{
        method: 'POST',
        body:JSON.stringify(cart.state),
        headers: {
          "Content-Type": "application/json"
        },
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

export const getCartUser = createAsyncThunk(
  'getCartUser',
  async(action, thunkApi) => {
    try{
      const response = await fetch( `${API_URL}cart?idUser=${action}`,{
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        },
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