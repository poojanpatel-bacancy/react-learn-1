import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 2501  // Development port
  },
  preview: {
    port: 3501  // Preview port
  }
})
