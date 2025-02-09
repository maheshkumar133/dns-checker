import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Force Vite to bind to the correct IP
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,  // Ensures Vite binds to all interfaces (0.0.0.0)
    port: 5173,  // Use your desired port
    strictPort: true, // Ensures the selected port is used
  },
});
