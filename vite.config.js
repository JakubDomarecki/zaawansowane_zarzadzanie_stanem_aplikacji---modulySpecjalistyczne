import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '06_Integracja_useReducer_z_Context_API/02_Debugowanie_i_optymalizacja';

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  plugins: [react()],
});
