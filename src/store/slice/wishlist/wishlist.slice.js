import { createSlice } from "@reduxjs/toolkit";
import { getWish, appDateWish } from "./wishlist.action";

const initialState = {
  wishlist:[],
  isLoading:false,
  error:'',
  idWish:'',
  idUser:'',
}

export const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers:{
    addWish:(state, action)=>{  
      let date = localStorage.wish !== undefined ?JSON.parse(localStorage.wish) : undefined
      if((localStorage.wish !== undefined) && (date?.state.wishlist.length)){
        state.wishlist = date.state.wishlist
        if(state.wishlist.length){
          if(state.wishlist.some((e)=>action.payload.wishlist.id == e.product.id)){
            let id = state.wishlist.findIndex(e => action.payload.wishlist.id == e.product.id)
            state.wishlist.splice(id, 1);
            localStorage.wish = JSON.stringify ({state});
          }else{
            state.wishlist.push({
              id:action.payload.wishlist.id,
              product: action.payload.wishlist,
            })
            localStorage.wish = JSON.stringify ({state}); 
          }
        }
      }else{
        if(state.wishlist.length){
          localStorage.wish = JSON.stringify ({state});
          if(state.wishlist.some((e)=>action.payload.wishlist.id == e.product.id)){
            let id = state.wishlist.findIndex(e => action.payload.wishlist.id == e.product.id)
            state.wishlist.splice(id, 1);
            localStorage.wish = JSON.stringify ({state});
          }else{
            state.wishlist.push({
              id:action.payload.wishlist.id,
              product: action.payload.wishlist,
            })
            localStorage.wish = JSON.stringify ({state});
          }
        }else{
          state.wishlist.push({
            id:action.payload.wishlist.id,
            product: action.payload.wishlist,
          })
          localStorage.wish = JSON.stringify ({state});
        }
      }
    },
    delWish:(state, action)=>{
      let id = state.wishlist.findIndex(e => action.payload == e.id)
      state.wishlist.splice(id, 1);
      localStorage.wish = JSON.stringify ({state});
    },
    delAllWish:(state)=>{
      state.wishlist = []
      localStorage.wish = JSON.stringify ({state});
    },
    getLocal: (state) => {
      let date = localStorage.wish !== undefined ?JSON.parse(localStorage.wish) : undefined
      if(date !== undefined){
        state.wishlist = date.state.wishlist
      }
      if(date === undefined && state.wishlist.length){
        localStorage.wish = JSON.stringify ({state});
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getWish.pending, state=>{
        state.isLoading = true
      })
      .addCase(getWish.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.idUser = action.payload[0].idUser
        state.idWish = action.payload[0].id
        action.payload[0].wish.map( e =>{
          if(state.wishlist.some((e)=>action.payload[0].wish.id == e.product.id)){
            state.wishlist.push({
              id: e.id,
              product: e.product
            })
          }
        })
      })
      .addCase(getWish.rejected, state=>{
        state.isLoading = false;
        state.wishlist = [];
      })

      .addCase(appDateWish.pending, state=>{
        state.isLoading = true;
      })
      .addCase(appDateWish.fulfilled, (state)=>{
        state.isLoading = false;
      })
      .addCase(appDateWish.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action
      })
  }
})

export const { actions, reducer } = wishlist