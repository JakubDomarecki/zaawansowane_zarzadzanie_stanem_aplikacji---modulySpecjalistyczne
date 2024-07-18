import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeSelector } from './Counter';


const container = document.getElementById('app');
const root = createRoot(container);
root.render(<ThemeSelector/>);
