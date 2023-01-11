import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userGetThunk, userPostThunk } from './userThunk';
import customFetch from '../../utils/customFetch';
import {
  addToLocalStorage,
  removeFromLocalStorage,
  getFromLocalStorage,
} from '../../utils/localStorage';

const initialState = {
  user: getFromLocalStorage('user', null),
  email: '',
  password: '',
  isLoading: false,
  userSuccess: false,
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    return userPostThunk('/auth/login/', user, thunkAPI);
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (user, thunkAPI) => {
    return userGetThunk('/auth/logout/', user, thunkAPI);
  }
);

customFetch.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      logoutUser();
    }

    return Promise.reject(error);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserState: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
  },
  extraReducers: {
    // Login User
    [loginUser.pending]: state => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.user;
      addToLocalStorage('user', state.user);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    // Logout User
    [logoutUser.fulfilled]: state => {
      state.user = null;
      state.userLoading = false;
      removeFromLocalStorage('user');
    },
  },
});

export const { changeUserState } = userSlice.actions;

export default userSlice.reducer;
