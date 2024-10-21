import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

export type TaskProps = {
  id: number;
  title: string;
  completed: boolean;
};

const initialState = {
  tasks: [] as TaskProps[],
  filter: "all" as FilterValue,
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
    changeTaskStatus: (state, action: PayloadAction<{ id: number }>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    changeTasksFilter: (state, action: PayloadAction<{ filter: FilterValue }>) => {
      state.filter = action.payload.filter;
    },
    removeCompletedTasks: (state) => {
      state.tasks = state.tasks.filter((task) => !task.completed);
    },
  },
});

export const { addTask, changeTaskStatus, changeTasksFilter, removeCompletedTasks } = slice.actions;
export const tasksReducer = slice.reducer;

export type FilterValue = "all" | "active" | "completed";
export const selectActiveTodosCount = (state: RootState) => {
    return state.tasks.tasks.filter(task => !task.completed).length;
  };
