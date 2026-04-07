import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import readableClassnames from 'vite-plugin-readable-classnames';

export default defineConfig({
  plugins: [react(), readableClassnames()],
  base: '/stoloto/',
});
