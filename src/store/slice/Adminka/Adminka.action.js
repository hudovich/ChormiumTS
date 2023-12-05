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

export const getEditAdminkaPost = createAsyncThunk(
  'getAdminkaPost',
  async(actions, thunkApi)=>{
    try{
      const response = await fetch (`${API_URL}${actions.url}/${actions.id}`,{
        method: "PATCH",
        body: JSON.stringify(
          actions.date
        ),
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

export const createPostAdminka = createAsyncThunk(
  'PostAdminka',
  async (action, thunkApi) => {
    try{
      const response = await fetch(`${API_URL}${action.url}`,
        {
          method:'POST',
          headers:{
            "Content-Type": "application/json"
          },
          body:JSON.stringify(action.date),
        }
      )
      let json = await response.json()
      return json
    }
    catch(error){
      thunkApi.rejectWithValue.error
    }
  }
)