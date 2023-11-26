import { API_URL } from "../../const";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createContact = createAsyncThunk(
  'createContact',
  async(action, thunkApi)=>{
    try{
      const responce = await fetch(`${API_URL}contact`, {
        method:"POST",
        body: JSON.stringify(action),
        headers:{
          "Content-Type": "application/json"
        }
      })
      let json = await responce.json();
      return json
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)

export const dellContact = createAsyncThunk(
  'dellContact',
  async(action, thunkApi)=>{
    try{
      const responce = await fetch(`${API_URL}contact/${action.id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":"application/json"
        }
      })
      let json = await responce.json();
      return json
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)