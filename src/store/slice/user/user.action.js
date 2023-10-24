import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

 export const getLogin = createAsyncThunk(
  "user",
  async(action, thunkApi) => {
    try{
      const response = await fetch(`${API_URL}login`,{
        method: 'POST',
        body: JSON.stringify(action),
        headers: {
          "Content-Type": "application/json",
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

export const getAutorization = createAsyncThunk(
  "auth",
  async(thunkApi)=>{
    try{
      const response = await fetch(`${API_URL}users/${localStorage.idUser}`,{
        method: 'GET',
        headers: {
          Authorization:`Bearer ${localStorage.token}`
        }
      })
      let json = await response.json();
      return(json);
    } 
    catch(error){
      thunkApi.rejectWithValue(error)
    }
  }
 )