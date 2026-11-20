import { configureStore } from '@reduxjs/toolkit'
import logReducer from './features/logSlice'

export const makeStore = () => {
 return configureStore({
   reducer: {
    user: logReducer
   }, 
 });
};
