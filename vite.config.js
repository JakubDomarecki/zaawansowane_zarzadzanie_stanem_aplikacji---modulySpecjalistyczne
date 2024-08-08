import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '11_Wprowadzenie_do_TanStack_Query/04_Rozbudowa_aplikacji_z_uzyciem_TanStack_Query';

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  plugins: [react()],
});
