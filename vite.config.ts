/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { DEFAULT_PORT, DEFAULT_URL } from './config/build/constants';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  define: {
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(DEFAULT_URL),
    __PROJECT__: JSON.stringify(DEFAULT_PORT),
  },
});
