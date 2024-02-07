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
          updateTask: (state, action) => {
            state.value = state.value.map(item =>
              item.id === action.payload.id ? { ...item, ...action.payload } : item
            );
          }
      }

});

export const {create, deleteTask, updateTask} =  createTask.actions;
export default createTask.reducer;