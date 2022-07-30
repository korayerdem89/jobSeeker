import { configureStore } from '@reduxjs/toolkit';
import jobsSlice from './JobsSlice';

export const store= configureStore({
  reducer:{
    jobsSlice: jobsSlice,
  }
});