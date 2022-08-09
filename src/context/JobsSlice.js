import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice=createSlice({
  name:'jobs',
  initialState:{
    favoritedJobs:[]
  },
  reducers:{
    addFavorite:(state,action)=>{
      let favList = [];
      const item =action.payload;
      favList =[...state.favoritedJobs, item];
      return {...state, favoritedJobs:favList}
    },
    removeJob:(state,action)=>{
      const job=action.payload;
      const newArr=state.favoritedJobs.filter(item=> item.id !== job.id);
      return {...state, favoritedJobs:newArr}
    },
  }
});



export const {addFavorite, removeJob} = jobsSlice.actions;
export default jobsSlice.reducer;