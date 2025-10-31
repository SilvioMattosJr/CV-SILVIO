// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // << ADICIONE ESTA LINHA >>
  base: '/CV-SILVIO/' // << IMPORTANTE: Substitua pelo nome do seu repositório no GitHub
})