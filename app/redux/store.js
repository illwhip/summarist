import { configureStore } from '@reduxjs/toolkit'
import logReducer from './features/logSlice'
import openLoginReducer from './features/openLoginSlice'
import openBookReducer from './features/openBookSlice';

export const makeStore = () => {
 return configureStore({
   reducer: {
    user: logReducer,
    modal: openLoginReducer,
    textSize: openBookReducer
   },
    //  middleware: (getDefaultMiddleware) => 
    // getDefaultMiddleware().concat(postsApi.middleware),
 });
};
