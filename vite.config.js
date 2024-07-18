import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '03_Zaawansowane_techniki_z_useReducer_-_tworzenie_customowych_hookow_i_praktyczne_zastosowania/03_Debugowanie_kodu_z_useReducer';

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  plugins: [react()],
});
