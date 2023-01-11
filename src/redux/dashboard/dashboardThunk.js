import customFetch from '../../utils/customFetch';

export const getAllItemsThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const createItemThunk = async (object, thunkAPI) => {
  try {
    const resp = await customFetch.post(object.url, object.value);

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateItemThunk = async (object, thunkAPI) => {
  try {
    const resp = await customFetch.patch(object.url, object.value);

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteItemThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.delete(url);

    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
