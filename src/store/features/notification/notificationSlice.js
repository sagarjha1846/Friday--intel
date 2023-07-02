import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { reduceErrorHandler } from '../../../utils';
import notificationService from './notificationService';

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  notification: null,
};

// userDetails

export const getAllNotification = createAsyncThunk(
  'notifications/notification',
  async (_, thunkAPI) => {
    try {
      const resp = await notificationService.getAllNotification();
      if (resp.Result !== 'Not Found') {
        const data = [
          ...JSON.parse(resp.unseen).map((el) => ({
            ...el,
            seen: false,
          })),
          ...JSON.parse(resp.seen).map((el) => ({ ...el, seen: true })),
        ].sort((a, b) => a.time_passed - b.time_passed);
        return data;
      } else {
        return [];
      }
    } catch (error) {
      const message = reduceErrorHandler(error);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const deleteAllNotifications = createAsyncThunk(
  'notifications/delete-all-notification',
  async (_, thunkAPI) => {
    try {
      const resp = await notificationService.deleteAllNotification();
      return resp;
    } catch (error) {
      const message = reduceErrorHandler(error);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const deleteNotificationByID = createAsyncThunk(
  'notifications/delete-notification-by-id',
  async (id, thunkAPI) => {
    try {
      const resp = await notificationService.deleteNotificationByID(id);
      return resp;
    } catch (error) {
      const message = reduceErrorHandler(error);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const readAllNotification = createAsyncThunk(
  'notifications/delete-notification-by-id',
  async (_, thunkAPI) => {
    try {
      const resp = await notificationService.readAllNotification();
      return resp;
    } catch (error) {
      const message = reduceErrorHandler(error);
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const notificationSlice = createSlice({
  name: 'notification',
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
      .addCase(getAllNotification.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllNotification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notification = action.payload;
        state.message = 'fetched';
      })
      .addCase(getAllNotification.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })

      .addCase(deleteAllNotifications.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteAllNotifications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'updated';
      })
      .addCase(deleteAllNotifications.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = 'updated';
      });
  },
});
export const { reset } = notificationSlice.actions;
export default notificationSlice.reducer;
