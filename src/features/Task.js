import { createSlice } from "@reduxjs/toolkit";
export const createTask = createSlice({
      name : "Task",
      initialState:{
        value:[{
            id: Date.now(),
            name:"Create a Plan",
            description:"for social media marketing",
            complete:false,
        }]
      },
      reducers:{
          create:(state,action)=>{
              state.value.unshift(action.payload);
          },
          deleteTask:(state,action)=>{
              state.value =  state.value.filter(item=> item.id !== action.payload.id);
          },
      }

});

export const {create, deleteTask} =  createTask.actions;
export default createTask.reducer;