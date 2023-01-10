import customFetch from '../../utils/customFetch';
import { logoutUser } from './userSlice';

export const userPostThunk = async (url, data, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, data);

    return resp.data;
  } catch (error) {
    const alerts = [];

    return thunkAPI.rejectWithValue(alerts);
  }
};

export const userGetThunk = async (url, thunkAPI) => {
  try {
    await customFetch.get(url);
  } catch (error) {
    const alerts = [];

    return thunkAPI.rejectWithValue(alerts);
  }
};

export const getCurrentUserThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);

    return resp.data;
  } catch (error) {
    if (error.response.status === 401) return;

    logoutUser();
  }
};
