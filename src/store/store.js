import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducer/userReducer';
import cartReducer from '../reducer/cartReducer';



const store = configureStore({ 
    reducer: {
      userReducer: userReducer,
      cartReducer : cartReducer
      },
    })

export default store;



