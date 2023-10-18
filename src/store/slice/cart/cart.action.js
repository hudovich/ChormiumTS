import { API_URL } from "../../const";

const { createAsyncThunk, isRejectedWithValue } = require("@reduxjs/toolkit");

export const getCart = createAsyncThunk(
  'cart',
  async(thunkApi, action)=>{
    try{
      const responce = await fatch(`${API_URL}/${action.userID}/${action.cart}`)
      let json = responce.json()
      return(json)
    }
    catch(error){
      thunkApi.isRejectedWithValue(error);
    }
  }
)