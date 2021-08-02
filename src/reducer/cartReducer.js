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

      }
    },
  })

export const { setHiddenCart,setCartItemAction } = cartReducer.actions
export default cartReducer.reducer
