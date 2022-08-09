import { createSlice } from '@reduxjs/toolkit';

export const jobsSlice=createSlice({
  name:'jobs',
  initialState:{
    favoritedJobs:[]
  },
  reducers:{
    addFavorite:(state,actions)=>{
      let favList = [];
      const item =actions.payload;
      favList =[...state.favoritedJobs, item];
      return {...state, favoritedJobs:favList}
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