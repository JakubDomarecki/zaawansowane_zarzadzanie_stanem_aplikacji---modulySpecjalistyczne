import React from 'react';
import { createRoot } from 'react-dom/client';
import { TasksProvider} from './TasksContext';
import { AddTask } from './AddTask';
import { Filter } from './Filter';
import { TasksList } from './TasksList';

const App = () => (
  <TasksProvider>
    <AddTask />
    <Filter />
    <TasksList />
  </TasksProvider>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
