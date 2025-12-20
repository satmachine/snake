import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  // IMPORTANT: change this if you host at a different path
  base: '/snake/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist'
  }
})