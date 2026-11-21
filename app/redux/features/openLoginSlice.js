import { createSlice } from '@reduxjs/toolkit';

const openLoginSlice = createSlice({
 name: 'modal',
 initialState: { isOpen: 0 },
 reducers: {
   openModal: (state) => {
      state.isOpen = 1
     },
   closeModal: (state) => {
      state.isOpen = 0
    },
   registerModal: (state) => {
      state.isOpen = 2
    },
   resetModal: (state) => {
      state.isOpen = 3
    },
  }
});


export const { openModal, closeModal, registerModal, resetModal } = openLoginSlice.actions;
export default openLoginSlice.reducer;


