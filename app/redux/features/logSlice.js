import { createSlice } from '@reduxjs/toolkit';

const logSlice = createSlice({
 name: 'user',
 initialState: {},
 reducers: {
   setUser: (user) => {
      user = { uid: user.uid, email: user.email }
     },
   clearUser: (user) => {
      user = {}
    },
  }
});


export const { setUser, clearUser } = logSlice.actions;
export default logSlice.reducer;


