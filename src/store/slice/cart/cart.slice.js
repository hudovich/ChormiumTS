import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList:[],
  userId:1,
  total:0
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
          if(state.productList.some((e)=>action.payload.product.id == e.product.id)){
            console.log('Already in cart');
          }else{
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
          if(state.productList.some((e)=>action.payload.product.id == e.product.id)){
            console.log('Already in cart');
          }else{
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
    }
  }
})

export const {actions, reducer} = CartSlice;