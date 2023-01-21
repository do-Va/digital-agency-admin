import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllItemsThunk,
  updateItemThunk,
  uploadImageThunk,
  deleteItemThunk,
  createItemThunk,
} from './dashboardThunk';

const initialState = {
  ourWorks: [],
  category: 'App',
  alt: '',
  image: '',
  ourWorksLoader: false,
  createSuccess: false,
  updateLoader: false,
  updateSuccess: false,
  uploadLoader: false,
  uploadSuccess: false,
  deleteSuccess: false,
};

export const getAllOurWorks = createAsyncThunk(
  'ourWork/getAllOurWorks',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

export const createWorkItem = createAsyncThunk(
  'ourWork/createWorkItem',
  async (object, thunkAPI) => {
    return createItemThunk(object, thunkAPI);
  }
);

export const updateWorkItem = createAsyncThunk(
  'ourWork/updateWorkItem',
  async (object, thunkAPI) => {
    return updateItemThunk(object, thunkAPI);
  }
);

export const uploadWorkItemImage = createAsyncThunk(
  'ourWork/uploadWorkItemImage',
  async (data, thunkAPI) => {
    return uploadImageThunk(data, thunkAPI);
  }
);

export const deleteWorkItem = createAsyncThunk(
  'ourWork/deleteWorkItem',
  async (url, thunkAPI) => {
    return deleteItemThunk(url, thunkAPI);
  }
);

const ourWorkSlice = createSlice({
  name: 'ourWork',
  initialState,
  reducers: {
    changeOurWorkState: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    resetValue: state => {
      state.alt = '';
      state.category = 'App';
    },
  },
  extraReducers: {
    [getAllOurWorks.pending]: state => {
      state.ourWorksLoader = true;
    },
    [getAllOurWorks.fulfilled]: (state, { payload }) => {
      state.ourWorksLoader = false;
      state.ourWorks = payload;
    },
    [getAllOurWorks.rejected]: (state, { payload }) => {
      state.ourWorksLoader = false;
    },

    [createWorkItem.pending]: state => {
      state.ourWorksLoader = true;
      state.createSuccess = false;
    },
    [createWorkItem.fulfilled]: (state, { payload }) => {
      state.ourWorksLoader = false;
      state.createSuccess = true;
    },
    [createWorkItem.rejected]: (state, { payload }) => {
      state.ourWorksLoader = false;
      state.createSuccess = false;
    },

    [updateWorkItem.pending]: state => {
      state.ourWorksLoader = true;
      state.updateSuccess = false;
    },
    [updateWorkItem.fulfilled]: (state, { payload }) => {
      state.ourWorksLoader = false;
      state.updateSuccess = true;
    },
    [updateWorkItem.rejected]: (state, { payload }) => {
      state.ourWorksLoader = false;
      state.updateSuccess = false;
    },

    [deleteWorkItem.pending]: state => {
      state.ourWorksLoader = true;
      state.deleteSuccess = false;
    },
    [deleteWorkItem.fulfilled]: (state, { payload }) => {
      state.ourWorksLoader = false;
      state.deleteSuccess = true;
    },
    [deleteWorkItem.rejected]: (state, { payload }) => {
      state.ourWorksLoader = false;
      state.deleteSuccess = false;
    },

    [uploadWorkItemImage.pending]: state => {
      state.uploadLoader = true;
      state.uploadSuccess = false;
    },
    [uploadWorkItemImage.fulfilled]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = true;
      state.image = payload.url;
    },
    [uploadWorkItemImage.rejected]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = false;
    },
  },
});

export const { changeOurWorkState, resetValue } = ourWorkSlice.actions;

export default ourWorkSlice.reducer;
