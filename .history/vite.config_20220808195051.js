import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess';
import { less as svelteLess } from 'svelte-preprocess-less';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: '/docs/index.html'
  }
  plugins: [svelte({
    preprocess: sveltePreprocess({
      style: svelteLess()
    })
  })]
})
