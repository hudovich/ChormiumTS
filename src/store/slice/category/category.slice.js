import { createSlice } from "@reduxjs/toolkit";
import { getCategory } from "./category.action";

const initialState = {
  list:[
    {id:'1',name:'Baby Car Seats', images:'', description: 'Servicing your vehicle is easy when you shop with us We have the high-quality auto parts you need for a successful repair',},
    {id:'2',name:'Baby Car Seats', images:'', description: 'Servicing your vehicle is easy when you shop with us We have the high-quality auto parts you need for a successful repair',},
    {id:'3',name:'Baby Car Seats', images:'', description: 'Servicing your vehicle is easy when you shop with us We have the high-quality auto parts you need for a successful repair',},
    {id:'4',name:'Baby Car Seats', images:'', description: 'Servicing your vehicle is easy when you shop with us We have the high-quality auto parts you need for a successful repair',},
    {id:'5',name:'Baby Car Seats', images:'', description: 'Servicing your vehicle is easy when you shop with us We have the high-quality auto parts you need for a successful repair',},
    {id:'6',name:'Baby Car Seats', images:'', description: 'Servicing your vehicle is easy when you shop with us We have the high-quality auto parts you need for a successful repair',},
    {id:'7',name:'Baby Car Seats', images:'', description: 'Servicing your vehicle is easy when you shop with us We have the high-quality auto parts you need for a successful repair',},
    {id:'8',name:'Baby Car Seats', images:'', description: 'Servicing your vehicle is easy when you shop with us We have the high-quality auto parts you need for a successful repair',},
    {id:'9',name:'Baby Car Seats', images:'', description: 'Servicing your vehicle is easy when you shop with us We have the high-quality auto parts you need for a successful repair',},
  ],
  productList:[],
  isLoading: false,
  error: '',
}


export const Category = createSlice({
  name: 'Category',
  initialState,
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(getCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCategory.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.list = action.payload.json
        state.productList = action.payload.products
      })
      .addCase(getCategory.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.error.message
        state.list = []
      })
  }
});

export const {actions, reducer} = Category