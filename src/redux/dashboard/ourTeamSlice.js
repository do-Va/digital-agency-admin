import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllItemsThunk,
  updateItemThunk,
  uploadImageThunk,
  deleteItemThunk,
  createItemThunk,
} from './dashboardThunk';

const initialState = {
  ourTeams: [],
  name: '',
  title: '',
  image: '',
  ourTeamsLoader: false,
  createSuccess: false,
  updateLoader: false,
  updateSuccess: false,
  uploadLoader: false,
  uploadSuccess: false,
  deleteSuccess: false,
};

export const getAllOurTeams = createAsyncThunk(
  'ourTeam/getAllOurTeams',
  async (url, thunkAPI) => {
    return getAllItemsThunk(url, thunkAPI);
  }
);

export const createTeamMember = createAsyncThunk(
  'ourTeam/createTeamMember',
  async (object, thunkAPI) => {
    return createItemThunk(object, thunkAPI);
  }
);

export const updateTeamMember = createAsyncThunk(
  'ourTeam/updateTeamMember',
  async (object, thunkAPI) => {
    return updateItemThunk(object, thunkAPI);
  }
);

export const uploadTeamMemberImage = createAsyncThunk(
  'ourTeam/uploadTeamMemberImage',
  async (data, thunkAPI) => {
    return uploadImageThunk(data, thunkAPI);
  }
);

export const deleteTeamMember = createAsyncThunk(
  'ourTeam/deleteTeamMember',
  async (url, thunkAPI) => {
    return deleteItemThunk(url, thunkAPI);
  }
);

const ourTeamSlice = createSlice({
  name: 'ourTeam',
  initialState,
  reducers: {
    changeOurTeamState: (state, { payload }) => {
      state[payload.name] = payload.value;
    },
    resetValue: state => {
      state.name = '';
      state.title = '';
    },
  },
  extraReducers: {
    [getAllOurTeams.pending]: state => {
      state.ourTeamsLoader = true;
    },
    [getAllOurTeams.fulfilled]: (state, { payload }) => {
      state.ourTeamsLoader = false;
      state.ourTeams = payload;
    },
    [getAllOurTeams.rejected]: (state, { payload }) => {
      state.ourTeamsLoader = false;
    },

    [createTeamMember.pending]: state => {
      state.ourTeamsLoader = true;
      state.createSuccess = false;
    },
    [createTeamMember.fulfilled]: (state, { payload }) => {
      state.ourTeamsLoader = false;
      state.createSuccess = true;
    },
    [createTeamMember.rejected]: (state, { payload }) => {
      state.ourTeamsLoader = false;
      state.createSuccess = false;
    },

    [updateTeamMember.pending]: state => {
      state.ourTeamsLoader = true;
      state.updateSuccess = false;
    },
    [updateTeamMember.fulfilled]: (state, { payload }) => {
      state.ourTeamsLoader = false;
      state.updateSuccess = true;
    },
    [updateTeamMember.rejected]: (state, { payload }) => {
      state.ourTeamsLoader = false;
      state.updateSuccess = false;
    },

    [deleteTeamMember.pending]: state => {
      state.ourTeamsLoader = true;
      state.deleteSuccess = false;
    },
    [deleteTeamMember.fulfilled]: (state, { payload }) => {
      state.ourTeamsLoader = false;
      state.deleteSuccess = true;
    },
    [deleteTeamMember.rejected]: (state, { payload }) => {
      state.ourTeamsLoader = false;
      state.deleteSuccess = false;
    },

    [uploadTeamMemberImage.pending]: state => {
      state.uploadLoader = true;
      state.uploadSuccess = false;
    },
    [uploadTeamMemberImage.fulfilled]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = true;
      state.image = payload.url;
    },
    [uploadTeamMemberImage.rejected]: (state, { payload }) => {
      state.uploadLoader = false;
      state.uploadSuccess = false;
    },
  },
});

export const { changeOurTeamState, resetValue } = ourTeamSlice.actions;

export default ourTeamSlice.reducer;
