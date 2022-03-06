import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'redux/reducers/root-reducer';

export const store = configureStore({
  reducer: {
    ...rootReducer,
  },
});
