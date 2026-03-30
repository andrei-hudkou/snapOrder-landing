import { defineConfig } from 'vite'

export default defineConfig({
  root: 'landing',
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: '../dist',
  },
})
