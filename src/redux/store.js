import { configureStore } from '@reduxjs/toolkit';
import { userSlice, menuSlice, heroSlice } from '.';

export const store = configureStore({
  reducer: {
    user: userSlice,
    menu: menuSlice,
    hero: heroSlice,
  },

  // devtoolsu production'da gösterme
  devTools: process.env.NODE_ENV !== 'production',
});
