import { configureStore } from '@reduxjs/toolkit'
import logReducer from './features/logSlice'
import openLoginReducer from './features/openLoginSlice'

export const makeStore = () => {
 return configureStore({
   reducer: {
    user: logReducer,
    modal: openLoginReducer,
   }, 
 });
};
