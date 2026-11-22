import { createSlice } from '@reduxjs/toolkit';

const logSlice = createSlice({
 name: 'user',
 initialState: null,
 reducers: {
   setUser: (state, action) => action.payload,
   clearUser: () => null,
    }
});


export const { setUser, clearUser } = logSlice.actions;
export default logSlice.reducer;


