import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '13_Best_practices_i_optymalizacja_TanStack_Query/02_Tworzenie_zlozonego_formularza_z_React_Router_i_TanStack_Query';

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  plugins: [react()],
});
