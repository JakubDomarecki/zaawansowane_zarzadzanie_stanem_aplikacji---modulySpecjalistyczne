import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '10_Zaawansowane_techniki_z_React_Hook_Form/02_Implementacja_zaawansowanych_technik_w_projekcie';

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  plugins: [react()],
});
