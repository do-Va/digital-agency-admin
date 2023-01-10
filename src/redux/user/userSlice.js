import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { userGetThunk, getCurrentUserThunk, userPostThunk } from './userThunk';
import customFetch from '../../utils/customFetch';

const initialState = {
  user: null,
  email: '',
  password: '',
  isLoading: false,
  userLoading: true,
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

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async thunkAPI => {
    return getCurrentUserThunk('/auth/getCurrentUser/', thunkAPI);
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
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    // Get Current User
    [getCurrentUser.pending]: state => {
      state.userLoading = true;
    },
    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.userLoading = false;
      state.user = payload.user;
    },

    // Logout User
    [logoutUser.fulfilled]: state => {
      state.user = null;
      state.userLoading = false;
    },
  },
});

export const { changeUserState } = userSlice.actions;

export default userSlice.reducer;
