import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable JSX transformation for .js files
      include: /\.(jsx|tsx|js)$/,
    }),
  ],
});
