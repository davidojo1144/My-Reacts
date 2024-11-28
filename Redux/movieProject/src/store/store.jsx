import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../features/counter/counterSlice";
import {MoviesApi} from "../service/MovieApi";
import { setupListeners } from "@reduxjs/toolkit/query";


 export const store = configureStore({
    reducer:{
        [MoviesApi.reducerPath] : MoviesApi.reducer
    },
    middleware: (getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(MoviesApi.middleware)
    }
 });

 setupListeners(store.dispatch);