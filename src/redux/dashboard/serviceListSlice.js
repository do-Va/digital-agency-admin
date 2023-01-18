import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createItemThunk,
  deleteItemThunk,
  getAllItemsThunk,
  updateItemThunk,
} from './dashboardThunk';

const initialState = {
  title: '',
  description: '',
  serviceList: [],
  serviceListLoader: false,
  createSuccess: false,
  deleteSuccess: false,
  updateSuccess: false,
};

export const getAllServiceList = createAsyncThunk(
  'serviceList/getAllServiceList',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

export const createListItem = createAsyncThunk(
  'serviceList/createListItem',
  async (object, thunkAPI) => {
    return createItemThunk(object, thunkAPI);
  }
);

export const updateListItem = createAsyncThunk(
  'serviceList/updateListItem',
  async (object, thunkAPI) => {
    return updateItemThunk(object, thunkAPI);
  }
);

export const deleteListItem = createAsyncThunk(
  'serviceList/deleteListItem',
  async (url, thunkAPI) => {
    return deleteItemThunk(url, thunkAPI);
  }
);

const serviceListSlice = createSlice({
  name: 'serviceList',
  initialState,
  reducers: {
    changeServiceListState: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    resetValue: state => {
      state.title = '';
      state.description = '';
    },
  },
  extraReducers: {
    [getAllServiceList.pending]: state => {
      state.serviceListLoader = true;
    },
    [getAllServiceList.fulfilled]: (state, { payload }) => {
      state.serviceListLoader = false;
      state.serviceList = payload;
    },
    [getAllServiceList.rejected]: (state, { payload }) => {
      state.serviceListLoader = false;
    },

    [createListItem.pending]: state => {
      state.serviceListLoader = true;
      state.createSuccess = false;
    },
    [createListItem.fulfilled]: (state, { payload }) => {
      state.serviceListLoader = false;
      state.createSuccess = true;
    },
    [createListItem.rejected]: (state, { payload }) => {
      state.serviceListLoader = false;
      state.createSuccess = false;
    },

    [updateListItem.pending]: state => {
      state.serviceListLoader = true;
      state.updateSuccess = false;
    },
    [updateListItem.fulfilled]: (state, { payload }) => {
      state.serviceListLoader = false;
      state.updateSuccess = true;
    },
    [updateListItem.rejected]: (state, { payload }) => {
      state.serviceListLoader = false;
      state.updateSuccess = false;
    },

    [deleteListItem.pending]: state => {
      state.serviceListLoader = true;
      state.deleteSuccess = false;
    },
    [deleteListItem.fulfilled]: (state, { payload }) => {
      state.serviceListLoader = false;
      state.deleteSuccess = true;
    },
    [deleteListItem.rejected]: (state, { payload }) => {
      state.serviceListLoader = false;
      state.deleteSuccess = false;
    },
  },
});

export const { changeServiceListState, resetValue } = serviceListSlice.actions;

export default serviceListSlice.reducer;
