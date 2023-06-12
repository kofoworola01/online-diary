import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'

import usersReducer from './slices/user'
import entriesReducer from './slices/entries'

const store = configureStore({
  reducer: {
    user: usersReducer,
    entries: entriesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
