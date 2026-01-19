import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        recipes: resolve(__dirname, 'recipes.html'),
        saved: resolve(__dirname, 'saved-recipes.html'),
        detail: resolve(__dirname, 'detail.html'),
      },
    },
  },
})