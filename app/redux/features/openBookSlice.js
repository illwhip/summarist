import { createSlice } from '@reduxjs/toolkit';

const openBookSlice = createSlice({
 name: 'textSize',
 initialState: { bookOpen: false },
 reducers: {
   openBook: (state) => {
      state.bookOpen = true
     },
   closeBook: (state) => {
      state.bookOpen = false
    }
  }
});


export const { openBook, closeBook } = openBookSlice.actions;
export default openBookSlice.reducer;

