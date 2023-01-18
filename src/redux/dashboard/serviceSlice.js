import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllItemsThunk,
  updateItemThunk,
  uploadImageThunk,
} from './dashboardThunk';
import convertHtml from '../../utils/convertHtml';

const initialState = {
  service: [],
  image: '',
  aboutLoader: false,
  updateLoader: false,
  updateSuccess: false,
  uploadLoader: false,
  uploadSuccess: true,
};

export const getService = createAsyncThunk(
  'service/getService',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

export const updateService = createAsyncThunk(
  'service/updateService',
  async (object, thunkAPI) => {
    return updateItemThunk(object, thunkAPI);
  }
);

export const uploadServiceImage = createAsyncThunk(
  'service/uploadServiceImage',
  async (data, thunkAPI) => {
    return uploadImageThunk(data, thunkAPI);
  }
);

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    changeServiceState: (state, { payload }) => {
      state.service = { ...state.service, [payload.name]: payload.value };
    },
    changeImage: (state, { payload }) => {
      state.image = payload;
    },
  },
  extraReducers: {
    [getService.pending]: state => {
      state.serviceLoader = true;
    },
    [getService.fulfilled]: (state, { payload }) => {
      state.serviceLoader = false;
      state.service = {
        ...payload[0],
        title: convertHtml(payload[0].title),
        title2: convertHtml(payload[0].title2),
      };
    },
    [getService.rejected]: (state, { payload }) => {
      state.serviceLoader = false;
    },

    [updateService.pending]: state => {
      state.updateLoader = true;
      state.updateSuccess = false;
    },
    [updateService.fulfilled]: (state, { payload }) => {
      state.updateLoader = false;
      state.updateSuccess = true;
    },
    [updateService.rejected]: (state, { payload }) => {
      state.updateLoader = false;
      state.updateSuccess = false;
    },

    [uploadServiceImage.pending]: state => {
      state.uploadLoader = true;
      state.uploadSuccess = false;
    },
    [uploadServiceImage.fulfilled]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = true;
      state.image = payload.url;
    },
    [uploadServiceImage.rejected]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = false;
    },
  },
});

export const { changeServiceState, changeImage } = serviceSlice.actions;

export default serviceSlice.reducer;
