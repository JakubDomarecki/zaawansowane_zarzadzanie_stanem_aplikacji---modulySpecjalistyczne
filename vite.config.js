import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '12_Zaawansowane_funkcje_TanStack_Query/03_Optymalizacja_strony_e-commerce';

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  plugins: [react()],
});
