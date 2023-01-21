import customFetch from '../../utils/customFetch';
import axios from 'axios';

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

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const uploadImageThunk = async (data, thunkAPI) => {
  try {
    const resp = await axios.post(
      'https://api.cloudinary.com/v1_1/dova/image/upload',
      data
    );

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
