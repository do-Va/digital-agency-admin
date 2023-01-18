import { configureStore } from '@reduxjs/toolkit';
import {
  userSlice,
  menuSlice,
  heroSlice,
  ourTeamSlice,
  aboutSlice,
  serviceSlice,
  serviceListSlice,
} from '.';

export const store = configureStore({
  reducer: {
    user: userSlice,
    menu: menuSlice,
    hero: heroSlice,
    about: aboutSlice,
    service: serviceSlice,
    serviceList: serviceListSlice,
    ourTeam: ourTeamSlice,
  },

  // devtoolsu production'da gösterme
  devTools: process.env.NODE_ENV !== 'production',
});
