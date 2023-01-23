import { configureStore } from '@reduxjs/toolkit';
import {
  userSlice,
  menuSlice,
  heroSlice,
  ourTeamSlice,
  aboutSlice,
  serviceSlice,
  serviceListSlice,
  ourWorkSlice,
  testimonialSlice,
  contactUsSlice,
  newsLetterSlice,
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
    ourWork: ourWorkSlice,
    testimonial: testimonialSlice,
    contactUs: contactUsSlice,
    newsLetter: newsLetterSlice,
  },

  // devtoolsu production'da gösterme
  devTools: process.env.NODE_ENV !== 'production',
});
