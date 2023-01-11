import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createItemThunk,
  deleteItemThunk,
  getAllItemsThunk,
  updateItemThunk,
} from './dashboardThunk';

const initialState = {
  title: '',
  url: '',
  menus: [],
  menuLoader: false,
  createSuccess: false,
  deleteSuccess: false,
  updateSuccess: false,
};

export const getAllMenus = createAsyncThunk(
  'menu/getAllMenus',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

export const createMenu = createAsyncThunk(
  'menu/createMenu',
  async (object, thunkAPI) => {
    return createItemThunk(object, thunkAPI);
  }
);

export const updateMenu = createAsyncThunk(
  'menu/updateMenu',
  async (object, thunkAPI) => {
    return updateItemThunk(object, thunkAPI);
  }
);

export const deleteMenu = createAsyncThunk(
  'menu/deleteMenu',
  async (url, thunkAPI) => {
    return deleteItemThunk(url, thunkAPI);
  }
);

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    changeMenuState: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    resetValue: state => {
      state.title = '';
      state.url = '';
    },
  },
  extraReducers: {
    [getAllMenus.pending]: state => {
      state.menuLoader = true;
    },
    [getAllMenus.fulfilled]: (state, { payload }) => {
      state.menuLoader = false;
      state.menus = payload;
    },
    [getAllMenus.rejected]: (state, { payload }) => {
      state.menuLoader = false;
    },

    [createMenu.pending]: state => {
      state.menuLoader = true;
      state.createSuccess = false;
    },
    [createMenu.fulfilled]: (state, { payload }) => {
      state.menuLoader = false;
      state.createSuccess = true;
    },
    [createMenu.rejected]: (state, { payload }) => {
      state.menuLoader = false;
      state.createSuccess = false;
    },

    [updateMenu.pending]: state => {
      state.menuLoader = true;
      state.updateSuccess = false;
    },
    [updateMenu.fulfilled]: (state, { payload }) => {
      state.menuLoader = false;
      state.updateSuccess = true;
    },
    [updateMenu.rejected]: (state, { payload }) => {
      state.menuLoader = false;
      state.updateSuccess = false;
    },

    [deleteMenu.pending]: state => {
      state.menuLoader = true;
      state.deleteSuccess = false;
    },
    [deleteMenu.fulfilled]: (state, { payload }) => {
      state.menuLoader = false;
      state.deleteSuccess = true;
    },
    [deleteMenu.rejected]: (state, { payload }) => {
      state.menuLoader = false;
      state.deleteSuccess = false;
    },
  },
});

export const { changeMenuState, resetValue } = menuSlice.actions;

export default menuSlice.reducer;
