import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkModeEnabled: false,
};

// userDetails

export const setTheme = createAsyncThunk(
  'theme/set-theme',
  async (data, thunkAPI) => {
    try {
      const resp = data;
      return resp;
    } catch (error) {
      const message = 'Something went wrong';
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setTheme.fulfilled, (state, action) => {
      state.isDarkModeEnabled = action.payload;
    });
  },
});
export const { reset } = themeSlice.actions;
export default themeSlice.reducer;
