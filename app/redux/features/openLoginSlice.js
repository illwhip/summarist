import { createSlice } from '@reduxjs/toolkit';

const openLoginSlice = createSlice({
 name: 'modal',
 initialState: { isOpen: false },
 reducers: {
   openOpen: (state) => {
      state.isOpen = true
     },
   closeModal: (state) => {
      state.isOpen = false
    },
  }
});


export const { openModal, closeModal } = openLoginSlice.actions;
export default openLoginSlice.reducer;


