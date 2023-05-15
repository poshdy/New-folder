import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-hot-toast'


const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuan: 0,
  cartTotalAmount: 0,
  favItems:  localStorage.getItem("favItems") ? JSON.parse(localStorage.getItem("favItems")) : [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuan +=1;
      } else {
        toast.success(`${action.payload.name} added to cart`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          });
        const tempPro = { ...action.payload, cartQuan: 1 };
       
        state.cartItems.push(tempPro);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
    },

    addToFav(state , action){
      toast.success(`${action.payload.name} added to fav list`)
      state.favItems.push(action.payload)


      localStorage.setItem("favItems" , JSON.stringify(state.favItems))
    },

    deleteFav(state , action){

     const delFav = state.favItems.filter((item) => item._id !== action.payload._id)

     state.favItems = delFav
     localStorage.setItem("favItems" , JSON.stringify(state.favItems))
    },

    deleteItemFromCart( state,action){
      const delItem = state.cartItems.filter((item)=>item._id !== action.payload._id)
state.cartItems = delItem

localStorage.setItem("cartItems" , JSON.stringify(state.cartItems))
    },
    decQuan(state , action){
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if(state.cartItems[itemIndex].cartQuan >1){
state.cartItems[itemIndex].cartQuan -=1
      }else if(state.cartItems[itemIndex].cartQuan === 1){
       const delItem = state.cartItems.filter((item)=>item._id !== action.payload._id)
state.cartItems = delItem

localStorage.setItem("cartItems" , JSON.stringify(state.cartItems))
      }
    },
    inQuan(state,action){
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if(state.cartItems[itemIndex].cartQuan >= 1){
        state.cartItems[itemIndex].cartQuan +=1

      }
      localStorage.setItem("cartItems" , JSON.stringify(state.cartItems))
    },
   
    calculateCartTotal: (state)=>{
let amount = 0;
let total = 0;
state.cartItems.forEach((item)=>{
  amount += item.amount
  total += item.cartQuan * item.price
})
state.cartTotalAmount  = total
state.cartTotalQuan = amount

    }
  },
  
  
  
});

export const { addToCart , addToFav ,deleteFav , deleteItemFromCart ,decQuan ,inQuan  , calculateCartTotal  } = CartSlice.actions;

export default CartSlice.reducer;
