import { createSlice } from "@reduxjs/toolkit";
import { sidebarLinks } from "../data/links";
export const boardSlices = createSlice({
      name:"board",
      initialState:{
         value:[
             {
               id: Date.now(),
               name:"",
               src:""
             },
         ]
      },
      reducers:{
          createBoard:(state,action)=>{
               const boardValue   = state.value;
               
               sidebarLinks.unshift(state.value = action.payload);
          }
      }
});

export const {createBoard}  = boardSlices.actions;
export default boardSlices.reducer;