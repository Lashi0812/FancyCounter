import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all addresses, equivalent to host: '0.0.0.0'
    port: 5173, // Default port for Vite
    strictPort: true, // Prevents port switching if 5173 is occupied
  },
})
