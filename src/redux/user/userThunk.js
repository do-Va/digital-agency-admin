import customFetch from '../../utils/customFetch';

export const userThunk = async (url, data, thunkAPI) => {
  console.log(url);

  try {
    const resp = await customFetch.post(url, data);

    console.log(resp);

    return resp.data;
  } catch (error) {
    const alerts = [];

    for (const key in error.response.data) {
      alerts[key + 'Alert'] = error.response.data[key].join(' ');
    }

    console.log(alerts);

    return thunkAPI.rejectWithValue(alerts);
  }
};
