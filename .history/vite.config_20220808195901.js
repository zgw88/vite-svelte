import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';
import { less as svelteLess } from 'svelte-preprocess-less';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // 选项写法
      '/api': {
        target: 'http://daojiajx.58.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  };
  plugins: [svelte({
    preprocess: sveltePreprocess({
      style: svelteLess()
    })
  })]
})
