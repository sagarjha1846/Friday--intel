import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { reduceErrorHandler } from '../../../utils';
import userService from './userService';

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  user: null,
};

// userDetails

export const userDetails = createAsyncThunk(
  'auth/user-details',
  async (_, thunkAPI) => {
    try {
      const resp = await userService.userDetails();
      return resp;
    } catch (error) {
      const message = reduceErrorHandler(error);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(userDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});
export const { reset } = userSlice.actions;
export default userSlice.reducer;
