import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    favoritedJobs: [],
    submittedJobs: [],
    pageNumber: 38,
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
    nextPage: (state, action) => {
      let increasePage;
      if (state.pageNumber === 89) {
        increasePage = 0;
      } else {
        increasePage = state.pageNumber + 1;
      }
      return { ...state, pageNumber: increasePage };
    },
    previousPage: (state, action) => {
      let decreasePage = state.pageNumber - 1;
      return { ...state, pageNumber: decreasePage };
    },

  }
});



export const { addFavorite, removeJob, addSubmitted, nextPage, previousPage } = jobsSlice.actions;
export default jobsSlice.reducer;