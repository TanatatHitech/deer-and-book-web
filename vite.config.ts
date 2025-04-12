import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        outDir: 'dist', // Where the build files go
        emptyOutDir: true,
    },
    // Optional: if you're doing SSR or middleware mode
    server: {
        port: 3000,
        open: true, // opens the browser
    },
});
