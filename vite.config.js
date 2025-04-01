import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'lucide': '/node_modules/lucide/dist/lucide.module.min.js'
    }
  }
});