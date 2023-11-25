/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from '@svgr/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
      '@hooks': path.resolve(__dirname, './src/hooks/index.ts'),
      '@utils': path.resolve(__dirname, './src/utils/index.ts'),
      '@constants': path.resolve(__dirname, './src/constants/index.ts'),
      '@stores': path.resolve(__dirname, './src/stores/index.ts'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@api': path.resolve(__dirname, './src/api'),
      '@configs': path.resolve(__dirname, './src/configs/index.ts'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@components': path.resolve(__dirname, './src/components'),
      '@decorators': path.resolve(__dirname, './.storybook/decorators/index.ts')
    }
  },
  server: { port: 3000 },
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts'
  }
})
