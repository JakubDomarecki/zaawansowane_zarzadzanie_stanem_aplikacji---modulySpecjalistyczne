import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '16_Best_practices_i_optymalizacja_Redux_Toolkit/01_Praktyczne_Zastosowanie_Best_Practices_w_Redux_Toolkit';

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  plugins: [react()],
});
