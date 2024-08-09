import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Path to exercise folder
 */
const exercisePath = '12_Zaawansowane_funkcje_TanStack_Query/02_Tworzenie_Infinite_Query_w_aplikacji';

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  plugins: [react()],
});
