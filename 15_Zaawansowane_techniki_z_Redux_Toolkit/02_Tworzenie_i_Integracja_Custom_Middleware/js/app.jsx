import React from 'react';
import { createRoot } from 'react-dom/client';
import { TestComponent } from './TestComponent';
import {store} from './Redux.jsx';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <TestComponent />
  </Provider>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
