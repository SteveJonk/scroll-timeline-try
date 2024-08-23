// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name][extname]', // Keeps original file name without hash
            },
        },
    },
});
