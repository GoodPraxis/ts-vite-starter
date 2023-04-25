import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [react(), ssr({ prerender: true })],
  test: {
    environment: 'jsdom',
    setupFiles: 'test-setup.ts',
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['./styles'],
      },
    },
  },
};

export default config;
