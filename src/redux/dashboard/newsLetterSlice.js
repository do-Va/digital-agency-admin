import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllItemsThunk,
  updateItemThunk,
  uploadImageThunk,
} from './dashboardThunk';
import convertHtml from '../../utils/convertHtml';

const initialState = {
  newsLetter: [],
  newsLetterList: [],
  image: '',
  newsLetterLoader: false,
  newsLetterListLoader: false,
  updateLoader: false,
  updateSuccess: false,
  uploadLoader: false,
  uploadSuccess: true,
};

export const getNewsLetter = createAsyncThunk(
  'newsLetter/getNewsLetter',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

export const updateNewsLetter = createAsyncThunk(
  'newsLetter/updateNewsLetter',
  async (object, thunkAPI) => {
    return updateItemThunk(object, thunkAPI);
  }
);

export const uploadNewsLetterImage = createAsyncThunk(
  'newsLetter/uploadNewsLetterImage',
  async (data, thunkAPI) => {
    return uploadImageThunk(data, thunkAPI);
  }
);

export const getAllNewsLetterMembers = createAsyncThunk(
  'newsLetter/getAllNewsLetterMembers',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

const newsLetterSlice = createSlice({
  name: 'newsLetter',
  initialState,
  reducers: {
    changeNewsLetterState: (state, { payload }) => {
      state.newsLetter = { ...state.newsLetter, [payload.name]: payload.value };
    },
    changeImage: (state, { payload }) => {
      state.image = payload;
    },
  },
  extraReducers: {
    [getNewsLetter.pending]: state => {
      state.newsLetterLoader = true;
    },
    [getNewsLetter.fulfilled]: (state, { payload }) => {
      state.newsLetterLoader = false;
      state.newsLetter = {
        ...payload[0],
        title: convertHtml(payload[0].title),
      };
    },
    [getNewsLetter.rejected]: (state, { payload }) => {
      state.newsLetterLoader = false;
    },

    [updateNewsLetter.pending]: state => {
      state.updateLoader = true;
      state.updateSuccess = false;
    },
    [updateNewsLetter.fulfilled]: (state, { payload }) => {
      state.updateLoader = false;
      state.updateSuccess = true;
    },
    [updateNewsLetter.rejected]: (state, { payload }) => {
      state.updateLoader = false;
      state.updateSuccess = false;
    },

    [uploadNewsLetterImage.pending]: state => {
      state.uploadLoader = true;
      state.uploadSuccess = false;
    },
    [uploadNewsLetterImage.fulfilled]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = true;
      state.image = payload.url;
    },
    [uploadNewsLetterImage.rejected]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = false;
    },

    [getAllNewsLetterMembers.pending]: state => {
      state.newsLetterListLoader = true;
    },
    [getAllNewsLetterMembers.fulfilled]: (state, { payload }) => {
      state.newsLetterListLoader = false;
      state.newsLetterList = payload;
    },
    [getAllNewsLetterMembers.rejected]: (state, { payload }) => {
      state.newsLetterListLoader = false;
    },
  },
});

export const { changeNewsLetterState, changeImage } = newsLetterSlice.actions;

export default newsLetterSlice.reducer;
