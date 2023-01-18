import { configureStore } from '@reduxjs/toolkit';
import { userSlice, menuSlice, heroSlice, ourTeamSlice, aboutSlice } from '.';

export const store = configureStore({
  reducer: {
    user: userSlice,
    menu: menuSlice,
    hero: heroSlice,
    about: aboutSlice,
    ourTeam: ourTeamSlice,
  },

  // devtoolsu production'da gösterme
  devTools: process.env.NODE_ENV !== 'production',
});
