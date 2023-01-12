import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllItemsThunk,
  updateItemThunk,
  uploadImageThunk,
} from './dashboardThunk';
import convertHtml from '../../utils/convertHtml';

const initialState = {
  hero: [],
  image: '',
  heroLoader: false,
  updateLoader: false,
  updateSuccess: false,
  uploadLoader: false,
  uploadSuccess: false,
};

export const getHero = createAsyncThunk(
  'hero/getHero',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

export const updateHero = createAsyncThunk(
  'hero/updateHero',
  async (object, thunkAPI) => {
    return updateItemThunk(object, thunkAPI);
  }
);

export const uploadHeroImage = createAsyncThunk(
  'hero/uploadHeroImage',
  async (data, thunkAPI) => {
    return uploadImageThunk(data, thunkAPI);
  }
);

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    changeHeroState: (state, { payload }) => {
      state.hero = { ...state.hero, [payload.name]: payload.value };
    },
  },
  extraReducers: {
    [getHero.pending]: state => {
      state.heroLoader = true;
    },
    [getHero.fulfilled]: (state, { payload }) => {
      state.heroLoader = false;
      state.hero = { ...payload[0], title: convertHtml(payload[0].title) };
    },
    [getHero.rejected]: (state, { payload }) => {
      state.heroLoader = false;
    },

    [updateHero.pending]: state => {
      state.updateLoader = true;
      state.updateSuccess = false;
    },
    [updateHero.fulfilled]: (state, { payload }) => {
      state.updateLoader = false;
      state.updateSuccess = true;
    },
    [updateHero.rejected]: (state, { payload }) => {
      state.updateLoader = false;
      state.updateSuccess = false;
    },

    [uploadHeroImage.pending]: state => {
      state.uploadLoader = true;
      state.uploadSuccess = false;
    },
    [uploadHeroImage.fulfilled]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = true;
      state.image = payload;
    },
    [uploadHeroImage.rejected]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = false;
    },
  },
});

export const { changeHeroState } = heroSlice.actions;

export default heroSlice.reducer;
