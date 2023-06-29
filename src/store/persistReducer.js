import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice';

import storage from 'redux-persist/lib/storage';
import notificationReducer from './features/notification/notificationSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'user'], // Only persist the auth slice of the store
};

const reducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  notifications: notificationReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default persistedReducer;
