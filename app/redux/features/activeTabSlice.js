import { createSlice } from '@reduxjs/toolkit';

const activeTabSlice = createSlice({
 name: 'activeLight',
 initialState: { isActive: 0 },
 reducers: {
   forYouAcrtivate: (state) => {
      state.isActive = 1
     },
   myLibraryActivate: (state) => {
      state.isActive = 2
    },
   settingsActivate: (state) => {
      state.isActive = 3
    },
  }
});


export const { forYouActivate, myLibraryActivate, settingsActivate } = activeTabSlice.actions;
export default activeTabSlice.reducer;


