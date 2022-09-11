import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      const newTodo = {
        id: v4(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      console.log(action.payload);
      // state.todos.splice(action.payload.id, 1);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    todoCompleted: (state, action) => {
      console.log(action.payload);
      console.log(state.todos)
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, removeTodo, todoCompleted } = todoSlice.actions;
