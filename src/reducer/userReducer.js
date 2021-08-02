import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null
};

const counterSlice = createSlice({
    name: 'currentUser',
    initialState,
    reducers: {
      setCurrentUserAct(state,action) {
        return {
          ...state,
          currentUser: action.payload
        }
      }
    },
  })

export const { setCurrentUserAct } = counterSlice.actions
export default counterSlice.reducer