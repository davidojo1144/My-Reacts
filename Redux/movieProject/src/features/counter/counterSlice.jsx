import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {value:0},
  reducers:{
    increment: (state)=>{
        state.value += 1; //Immer
    },
    decrement: (state)=>{
        state.value -= 1;
    },
    reset: (state)=>{
        state.value = 0;
    }
  }
})
export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;