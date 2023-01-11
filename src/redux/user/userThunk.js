import customFetch from '../../utils/customFetch';

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
