import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id:'1', name:'Home', url:'/', description:''},
  {id:'2', name:'Shop', url:'/', description:''},
  {id:'3', name:'Wishlist', url:'/wishlist', description:''},
  {id:'4', name:'My account', url:'/account', description:''},
  {id:'5', name:'Blog', url:'/blog', description:''},
  {id:'6', name:'About Us', url:'/about', description:''},
  {id:'7', name:'Gallery', url:'/gallery', description:''},
  {id:'8', name:'Contacts', url:'/contact', description:'The Alumalite Big Step Side Bars install in minutes, providing great looks, convenience and safety for your vehicle.'},
]

export const Pages = createSlice({
  name: 'Pages',
  initialState,
  reducers:{}
});

export const {actions, reducer} = Pages