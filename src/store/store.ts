import { configureStore } from '@reduxjs/toolkit';

import authSlice from './features/authSlice';
import sessionStorage from 'redux-persist/es/storage/session';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
}
const persistedReducer = persistReducer(persistConfig, authSlice)
const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
