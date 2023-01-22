import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllItemsThunk,
  updateItemThunk,
  uploadImageThunk,
  deleteItemThunk,
  createItemThunk,
} from './dashboardThunk';

const initialState = {
  testimonials: [],
  name: '',
  title: '',
  description: '',
  image: '',
  testimonialsLoader: false,
  createSuccess: false,
  updateLoader: false,
  updateSuccess: false,
  uploadLoader: false,
  uploadSuccess: false,
  deleteSuccess: false,
};

export const getAllTestimonials = createAsyncThunk(
  'testimonial/getAllTestimonials',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

export const createTestimonialMember = createAsyncThunk(
  'testimonial/createTestimonialMember',
  async (object, thunkAPI) => {
    return createItemThunk(object, thunkAPI);
  }
);

export const updateTestimonialMember = createAsyncThunk(
  'testimonial/updateTestimonialMember',
  async (object, thunkAPI) => {
    return updateItemThunk(object, thunkAPI);
  }
);

export const uploadTestimonialMemberImage = createAsyncThunk(
  'testimonial/uploadTestimonialMemberImage',
  async (data, thunkAPI) => {
    return uploadImageThunk(data, thunkAPI);
  }
);

export const deleteTestimonialMember = createAsyncThunk(
  'testimonial/deleteTestimonialMember',
  async (url, thunkAPI) => {
    return deleteItemThunk(url, thunkAPI);
  }
);

const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState,
  reducers: {
    changeTestimonialState: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    resetValue: state => {
      state.name = '';
      state.title = '';
      state.description = '';
    },
  },
  extraReducers: {
    [getAllTestimonials.pending]: state => {
      state.testimonialsLoader = true;
    },
    [getAllTestimonials.fulfilled]: (state, { payload }) => {
      state.testimonialsLoader = false;
      state.testimonials = payload;
    },
    [getAllTestimonials.rejected]: (state, { payload }) => {
      state.testimonialsLoader = false;
    },

    [createTestimonialMember.pending]: state => {
      state.testimonialsLoader = true;
      state.createSuccess = false;
    },
    [createTestimonialMember.fulfilled]: (state, { payload }) => {
      state.testimonialsLoader = false;
      state.createSuccess = true;
    },
    [createTestimonialMember.rejected]: (state, { payload }) => {
      state.testimonialsLoader = false;
      state.createSuccess = false;
    },

    [updateTestimonialMember.pending]: state => {
      state.testimonialsLoader = true;
      state.updateSuccess = false;
    },
    [updateTestimonialMember.fulfilled]: (state, { payload }) => {
      state.testimonialsLoader = false;
      state.updateSuccess = true;
    },
    [updateTestimonialMember.rejected]: (state, { payload }) => {
      state.testimonialsLoader = false;
      state.updateSuccess = false;
    },

    [deleteTestimonialMember.pending]: state => {
      state.testimonialsLoader = true;
      state.deleteSuccess = false;
    },
    [deleteTestimonialMember.fulfilled]: (state, { payload }) => {
      state.testimonialsLoader = false;
      state.deleteSuccess = true;
    },
    [deleteTestimonialMember.rejected]: (state, { payload }) => {
      state.testimonialsLoader = false;
      state.deleteSuccess = false;
    },

    [uploadTestimonialMemberImage.pending]: state => {
      state.uploadLoader = true;
      state.uploadSuccess = false;
    },
    [uploadTestimonialMemberImage.fulfilled]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = true;
      state.image = payload.url;
    },
    [uploadTestimonialMemberImage.rejected]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = false;
    },
  },
});

export const { changeTestimonialState, resetValue } = testimonialSlice.actions;

export default testimonialSlice.reducer;
