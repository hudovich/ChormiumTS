import { createSlice } from "@reduxjs/toolkit";
import { getCart, appDateCartAPI } from "./cart.action"

const initialState = {
  productList:[],
  isLoading: false,
  idUser:'',
  idCart:'',
  total:0,
}

export const CartSlice = createSlice({
  name:'CartSlice', 
  initialState,
  reducers:{
    question: (state, action) => {
      let index = state.productList.findIndex((e)=> e.product.id == action.payload.id)
      let data = state.productList[index];
      if(action.payload.boolean){ 
        data.quantity =  data.quantity+1
        data.subtotal = data.subtotal + Number(data.product.price) 
        localStorage.cart = JSON.stringify ({state});
      }else{
        data.quantity = data.quantity > 0 ? data.quantity - 1 : data.quantity
        data.subtotal = data.quantity > 0 ? data.subtotal - Number(data.product.price) : 0
        localStorage.cart = JSON.stringify ({state});
      }
    },
    addProductCart: (state, action) => {
      let date = localStorage.cart !== undefined ?JSON.parse(localStorage.cart) : undefined
      if((localStorage.cart !== undefined) && (date.state.productList.length)){
        state.productList = date.state.productList
        if(state.productList.length){
          if(!state.productList.some((e)=>action.payload.product.id == e.product.id)){
            state.productList.push({
              id:state.productList.length+1,
              product: action.payload.product,
              quantity: action.payload.quantity ? action.payload.quantity: 1, 
              subtotal: action.payload.subtotal ? action.payload.subtotal : Number(action.payload.product.price),
            })
            localStorage.cart = JSON.stringify ({state}); 
          }
        }
      }else{
        if(state.productList.length){
          localStorage.cart = JSON.stringify ({state});
          if(!state.productList.some((e)=>action.payload.product.id == e.product.id)){
            state.productList.push({
              id:state.productList.length+1,
              product: action.payload.product,
              quantity: action.payload.quantity? action.payload.quantity: 1, 
              subtotal: action.payload.subtotal ? action.payload.subtotal : Number(action.payload.product.price),
            })
            localStorage.cart = JSON.stringify ({state});
          }
        }else{
          state.productList.push({
            id:state.productList.length+1,
            product: action.payload.product,
            quantity: action.payload.quantity? action.payload.quantity: 1, 
            subtotal: action.payload.subtotal ? action.payload.subtotal : Number(action.payload.product.price),
          })
          localStorage.cart = JSON.stringify ({state});
        }
      }
    },
    delProductCart: (state, action) => {
      let id = state.productList.findIndex(e => action.payload == e.id)
      state.productList.splice(id, 1);
      localStorage.cart = JSON.stringify ({state});
    },
    delAllProductCart: (state) => {
      state.productList = []
      localStorage.cart = JSON.stringify ({state});
    },
    getlocalCart: (state) => {
      let date = localStorage.cart !== undefined ?JSON.parse(localStorage.cart):undefined
      if(date !== undefined){
        state.productList = date.state.productList
      }
      if(date === undefined && state.productList.length){
        localStorage.cart = JSON.stringify ({state});
      }
    },
    getUserCart: (state, action) => {
      state.idUser = action.payload
      localStorage.cart = JSON.stringify ({state});
    }
  },
  extraReducers: builder => {
    builder
      .addCase(appDateCartAPI.pending, state=>{
        state.isLoading = true;
      })
      .addCase(appDateCartAPI.fulfilled, (state)=>{
        state.isLoading = false;
      })
      .addCase(appDateCartAPI.rejected, state=>{
        state.isLoading = false;
      })


      .addCase(getCart.pending, state=>{
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.idCart = action.payload[0].id
        action.payload[0].productList.map( e =>{
          if(!state.productList.some((m)=>e.product.id == m.product.id)){
            state.productList.push({
              id:state.productList.length+1,
              product: e.product,
              quantity: e.quantity ? e.quantity: 1, 
              subtotal: e.subtotal ? e.subtotal : Number(e.product.price),
            })
            localStorage.cart = JSON.stringify ({state}); 
          }
        })
      })
      .addCase(getCart.rejected, state=>{
        state.isLoading = false;
      })
  }
})

export const {actions, reducer} = CartSlice;