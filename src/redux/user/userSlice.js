import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userThunk } from './userThunk';
import customFetch from '../../utils/customFetch';

const initialState = {
  user: null,
  email: '',
  password: '',
  userLoading: false,
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    return userThunk('/auth/login/', user, thunkAPI);
  }
);

export const logoutUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    return userThunk('/auth/logout/', user, thunkAPI);
  }
);

customFetch.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // console.log(error.response)
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
    [loginUser.pending]: state => {
      state.userLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.userLoading = false;
      state.user = payload.user;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.userLoading = false;
      state.error = payload;
    },
    [logoutUser.fulfilled]: state => {
      state.user = null;
      state.userLoading = false;
    },
  },
});

export const { changeUserState } = userSlice.actions;

export default userSlice.reducer;
