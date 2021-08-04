import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hidden: true,
  cartItems:[]
};

const addItemToCart =(cartItems,cartItemToAdd)=>{

  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
  if(existingCartItem)
  {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id ? {...item,quantity:item.quantity + 1} : item
    );
  }
  
  return [...cartItems,{...cartItemToAdd,quantity:1}]
}

const removeItemToCart =(cartItems,cartItemToAdd)=>{

  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

  if(existingCartItem.quantity === 1)
  {
    return cartItems.filter(item => item.id !== cartItemToAdd.id);
  }

    return cartItems.map(item =>
      item.id === cartItemToAdd.id ? {...item,quantity:item.quantity - 1} : item
    );
}



const cartReducer = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      setHiddenCart(state,action) {
        return {
          ...state,
          hidden: !action.payload
        }
      },
      setCartItemAction(state,action){
        return{
          ...state,
          cartItems:addItemToCart(state.cartItems,action.payload)
        }
      },
      removeItemCartAction(state,action){
        return{
          ...state,
          cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        }
      },
      removeItemCartArrowAction(state,action){
        return{
          ...state,
          cartItems:removeItemToCart(state.cartItems,action.payload)
        }
      }
    },
  })

export const { setHiddenCart,setCartItemAction,removeItemCartAction,removeItemCartArrowAction } = cartReducer.actions
export default cartReducer.reducer
