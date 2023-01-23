import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllItemsThunk,
  updateItemThunk,
  uploadImageThunk,
} from './dashboardThunk';
import convertHtml from '../../utils/convertHtml';

const initialState = {
  contactUs: [],
  contactUsList: [],
  image: '',
  contactUsLoader: false,
  contactUsListLoader: false,
  updateLoader: false,
  updateSuccess: false,
  uploadLoader: false,
  uploadSuccess: true,
};

export const getContactUs = createAsyncThunk(
  'contactUs/getContactUs',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

export const updateContactUs = createAsyncThunk(
  'contactUs/updateContactUs',
  async (object, thunkAPI) => {
    return updateItemThunk(object, thunkAPI);
  }
);

export const uploadContactUsImage = createAsyncThunk(
  'contactUs/uploadContactUsImage',
  async (data, thunkAPI) => {
    return uploadImageThunk(data, thunkAPI);
  }
);

export const getAllContactMembers = createAsyncThunk(
  'contactUs/getAllContactMembers',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
    changeContactUsState: (state, { payload }) => {
      state.contactUs = { ...state.contactUs, [payload.name]: payload.value };
    },
    changeImage: (state, { payload }) => {
      state.image = payload;
    },
  },
  extraReducers: {
    [getContactUs.pending]: state => {
      state.contactUsLoader = true;
    },
    [getContactUs.fulfilled]: (state, { payload }) => {
      state.contactUsLoader = false;
      state.contactUs = { ...payload[0], title: convertHtml(payload[0].title) };
    },
    [getContactUs.rejected]: (state, { payload }) => {
      state.contactUsLoader = false;
    },

    [updateContactUs.pending]: state => {
      state.updateLoader = true;
      state.updateSuccess = false;
    },
    [updateContactUs.fulfilled]: (state, { payload }) => {
      state.updateLoader = false;
      state.updateSuccess = true;
    },
    [updateContactUs.rejected]: (state, { payload }) => {
      state.updateLoader = false;
      state.updateSuccess = false;
    },

    [uploadContactUsImage.pending]: state => {
      state.uploadLoader = true;
      state.uploadSuccess = false;
    },
    [uploadContactUsImage.fulfilled]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = true;
      state.image = payload.url;
    },
    [uploadContactUsImage.rejected]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = false;
    },

    [getAllContactMembers.pending]: state => {
      state.contactUsListLoader = true;
    },
    [getAllContactMembers.fulfilled]: (state, { payload }) => {
      state.contactUsListLoader = false;
      state.contactUsList = payload;
    },
    [getAllContactMembers.rejected]: (state, { payload }) => {
      state.contactUsListLoader = false;
    },
  },
});

export const { changeContactUsState, changeImage } = contactUsSlice.actions;

export default contactUsSlice.reducer;
