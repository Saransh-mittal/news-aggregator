import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Replace with your backend server URL
        changeOrigin: true,
      }
    }
  },
  plugins: [react()],
})
