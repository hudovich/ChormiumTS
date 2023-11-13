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

 export const editUser = createAsyncThunk(
  "editUser",
  async(action, thunkApi)=>{
    debugger
    try{
      const response = await fetch(`${API_URL}users/${localStorage.idUser}`, {
        method: "PATCH",
        body: JSON.stringify({
          email: action.email,
          password: action.newPassword ? action.newPassword : action.password,
          name: action.name,
          lastName: action.lastName,
          address:{
            city:action.address.city,
            postcode:action.address.postcode,
            region:action.address.region,
            streetAddress:action.address.streetAddress,
          }
      }),
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
          "Content-Type": "application/json",
        }
      })
      let json = response.json()
      console.log(json);
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