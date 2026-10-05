import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Served from the root of kettooutdoors.com (see public/CNAME).
export default defineConfig({
  plugins: [react()],
})
