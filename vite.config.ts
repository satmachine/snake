import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
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
