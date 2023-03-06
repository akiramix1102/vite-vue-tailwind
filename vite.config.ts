import { fileURLToPath, URL } from 'node:url'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      // Specify symbolId format
      symbolId: 'icon-[dir]-[name]'
    })
  ],
  resolve: {
    alias: [{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }]
  }
})
