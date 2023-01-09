import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '.';

export const store = configureStore({
  reducer: {
    user: userSlice,
  },

  // devtoolsu production'da gösterme
  devTools: process.env.NODE_ENV !== 'production',
});
