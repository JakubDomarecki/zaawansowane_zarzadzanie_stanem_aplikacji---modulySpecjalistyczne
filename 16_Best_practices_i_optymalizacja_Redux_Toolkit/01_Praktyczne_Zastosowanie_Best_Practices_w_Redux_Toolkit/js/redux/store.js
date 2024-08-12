import { configureStore, createEntityAdapter, createSelector, createSlice } from '@reduxjs/toolkit';

const tasksAdapter = createEntityAdapter();

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksAdapter.getInitialState(),
  reducers: {
    addTask: tasksAdapter.addOne,
    removeTask: tasksAdapter.removeOne,
    toggleTask: (state, action) => {
      const id = action.payload;
      const task = state.entities[id];
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;


const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export default store;


const { selectAll } = tasksAdapter.getSelectors((state) => state.tasks);

export const selectAllTasks = createSelector([selectAll], (tasks) => tasks);

export const selectActiveTasks = createSelector([selectAllTasks], (tasks) =>
  tasks.filter((task) => !task.completed)
);

export const selectCompletedTasks = createSelector([selectAllTasks], (tasks) =>
  tasks.filter((task) => task.completed)
);