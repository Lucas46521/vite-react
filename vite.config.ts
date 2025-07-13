
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  assetsInclude: ['**/*.mdx'],
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})
