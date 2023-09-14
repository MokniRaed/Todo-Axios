import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { title: "React Js Home Work", id: 1, isDone: true },
    { title: "Test GTA6 in computer ", id: 2, isDone: false },
    { title: "Go to gym at 6:30 pm", id: 3, isDone: false },
  ],

  reducers: {
    addTodo: (state, action) => {
      const newTask = {
        title: action.payload,
        id: uuid(),
        isDone: false,
      };
      state.push(newTask);
    },
    deleteTodo: (state, action) => {
      const stat = state.filter((el) => el.id !== action.payload);
      return stat;
    },
    editTodo: (state, action) => {
        const { id, title } = action.payload;
  const todoToEdit = state.find((el) => el.id === id);
  if (todoToEdit) {
    todoToEdit.title = title;
  }
      
    },
    toggleTodo: (state, action) => {
      const stat = state.find((el) => el.id === action.payload);
      stat.isDone = !stat.isDone;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
