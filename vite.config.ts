import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project from a /ketto-outdoors-web/ subpath;
  // keep local dev at "/" so `npm run dev` doesn't redirect.
  base: command === 'build' ? '/ketto-outdoors-web/' : '/',
  plugins: [react()],
}))
