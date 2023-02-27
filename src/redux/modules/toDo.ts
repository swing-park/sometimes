import { createSlice } from "@reduxjs/toolkit";

export interface ToDoState {
  id: number;
  isDone: boolean;
  title: string;
  content: string;
}
const initialState: ToDoState[] = [];

const toDo = createSlice({
  name: "toDoReducer",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push({
        id: Date.now(),
        isDone: false,
        title: action.payload.title,
        content: action.payload.content,
      });
    },
    delete: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload.id);
    },
    update: (state, action) => {
      return state.map((toDo) =>
        toDo.id === action.payload.id ? { ...toDo, isDone: !toDo.isDone } : toDo
      );
    },
  },
});

export default toDo;
