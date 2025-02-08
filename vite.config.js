import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
// import vue from '@vitejs/plugin-vue';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'path';

export default defineConfig({
    "compilerOptions": {
        "paths": {
            "$lib": ["./resources/js"],
            "$lib/*": ["./resources/js/*"],
            "$css": ["./resources/css"],
        }
    },
    resolve: {
        alias: {
            $lib: path.resolve("./resources/js"),
            $css: path.resolve("./resources/css"),
        },
    },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        svelte(),
        // vue({
        //     template: {
        //         transformAssetUrls: {
        //             base: null,
        //             includeAbsolute: false,
        //         },
        //     },
        // }),
    ],
});
