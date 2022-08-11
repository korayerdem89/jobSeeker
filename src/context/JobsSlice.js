import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    favoritedJobs: [],
    submittedJobs: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      let favList = [];
      const item = action.payload;
      favList = [...state.favoritedJobs, item];
      return { ...state, favoritedJobs: favList }
    },
    addSubmitted: (state, action) => {
      let submitList = [];
      const item = action.payload;
      submitList = [...state.submittedJobs, item];
      return { ...state, submittedJobs: submitList }
    },
    removeJob: (state, action) => {
      const id = action.payload;
      const newArr = state.favoritedJobs.filter(item => item.id !== id);
      return { ...state, favoritedJobs: newArr }
    },
  }
});



export const { addFavorite, removeJob, addSubmitted, nextPage, previousPage } = jobsSlice.actions;
export default jobsSlice.reducer;