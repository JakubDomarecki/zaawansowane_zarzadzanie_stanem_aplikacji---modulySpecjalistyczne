import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '02_Wprowadzenie_do_useReducer_i_jego_podstawowe_zastosowania/01_Stworzenie_pierwszego_reducera';

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  plugins: [react()],
});
