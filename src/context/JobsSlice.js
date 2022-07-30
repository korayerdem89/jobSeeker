import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice=createSlice({
  name:'jobs',
  initialState:{
    favoritedJobs:[]
  },
  reducers:{
    addFavorite:(state,actions)=>{
      const {item}=actions.payload;
      [...state.favoritedJobs, item];
    },
    // removeJob:(state,actions)=>{
    //   const {job}=actions.payload;
    //   const newArr=state.favoriteJobs.filter(item=> item.id!==job.id);
    //   state.favoriteJobs=newArr;
    // },
  }
});



export const {addFavorite} = jobsSlice.actions;
export default jobsSlice.reducer;