import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '15_Zaawansowane_techniki_z_Redux_Toolkit/02_Tworzenie_i_Integracja_Custom_Middleware';

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  plugins: [react()],
});
