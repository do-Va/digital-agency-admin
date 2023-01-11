import { configureStore } from '@reduxjs/toolkit';
import { userSlice, menuSlice } from '.';

export const store = configureStore({
  reducer: {
    user: userSlice,
    menu: menuSlice,
  },

  // devtoolsu production'da gösterme
  devTools: process.env.NODE_ENV !== 'production',
});
