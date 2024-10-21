import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TaskProps = {
  id: number;
  title: string;
  completed: boolean;
};

const initialState = {
  tasks: [] as TaskProps[],
};
export const slice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ title: string }>) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.tasks.unshift(newTask);
    },
  },
});

export const { addTask } = slice.actions;
export const tasksReducer = slice.reducer;
