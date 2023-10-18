import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:{
    id:1,
    name:'Виталий',
    lastName: 'Гудович',
    grups: 1,
    favorites:[],
    cart:[],
    email:'vitaliycall@gmail.com',
    password: 'admin',
    orders:[
      {
        id:1,
        quantity:2,
        subtotal:200,
        status: 0,
        product:{
          id:2,
          name:"Названия2", 
          images:[{id:1, url:"https://www.oponeo.pl/Temp/imperial-ecosport-2-11575-f-f-l700-sk4.webp"}],
          promotion:"sale",
          category:[1], description:"описания",
          price: 100, 
          rating:0,
          reviews:[{id:0, text:"Comment", autgor:"author", photo:"" ,eMail:"e-mail"}]
        },
      },
      {
        id:2,
        quantity:2,
        subtotal:200,
        status: 0,
        product:{
          id:2,
          name:"Названия2", 
          images:[{id:1, url:"https://www.oponeo.pl/Temp/imperial-ecosport-2-11575-f-f-l700-sk4.webp"}],
          promotion:"sale",
          category:[1], description:"описания",
          price: 100, 
          rating:0,
          reviews:[{id:0, text:"Comment", autgor:"author", photo:"" ,eMail:"e-mail"}]
        },
      }
    ],
    addres:{
      region:'',
      streetAddress:'',
      city:'',
      postcode:'',
    }
  },
  token:'',
  isLoading:false,
  error: '',
}

export const User = createSlice({
  name:'user',
  initialState,
  reducer:{},
})

export const { actions, reducer } = User;