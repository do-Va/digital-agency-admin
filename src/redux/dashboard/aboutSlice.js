import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllItemsThunk,
  updateItemThunk,
  uploadImageThunk,
} from './dashboardThunk';
import convertHtml from '../../utils/convertHtml';

const initialState = {
  about: [],
  image: '',
  aboutLoader: false,
  updateLoader: false,
  updateSuccess: false,
  uploadLoader: false,
  uploadSuccess: false,
};

export const getAbout = createAsyncThunk(
  'about/getAbout',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

export const updateAbout = createAsyncThunk(
  'about/updateAbout',
  async (object, thunkAPI) => {
    return updateItemThunk(object, thunkAPI);
  }
);

export const uploadAboutImage = createAsyncThunk(
  'about/uploadAboutImage',
  async (data, thunkAPI) => {
    return uploadImageThunk(data, thunkAPI);
  }
);

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    changeAboutState: (state, { payload }) => {
      state.about = { ...state.about, [payload.name]: payload.value };
    },
  },
  extraReducers: {
    [getAbout.pending]: state => {
      state.aboutLoader = true;
    },
    [getAbout.fulfilled]: (state, { payload }) => {
      state.aboutLoader = false;
      state.about = {
        ...payload[0],
        title: convertHtml(payload[0].title),
        description: convertHtml(payload[0].description),
      };
    },
    [getAbout.rejected]: (state, { payload }) => {
      state.aboutLoader = false;
    },

    [updateAbout.pending]: state => {
      state.updateLoader = true;
      state.updateSuccess = false;
    },
    [updateAbout.fulfilled]: (state, { payload }) => {
      state.updateLoader = false;
      state.updateSuccess = true;
    },
    [updateAbout.rejected]: (state, { payload }) => {
      state.updateLoader = false;
      state.updateSuccess = false;
    },

    [uploadAboutImage.pending]: state => {
      state.uploadLoader = true;
      state.uploadSuccess = false;
    },
    [uploadAboutImage.fulfilled]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = true;
      state.image = payload;
    },
    [uploadAboutImage.rejected]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = false;
    },
  },
});

export const { changeAboutState } = aboutSlice.actions;

export default aboutSlice.reducer;
