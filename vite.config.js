import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
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
            $lib: path.resolve("/resources/js"),
            $css: path.resolve("/resources/css"),
        },
    },
    plugins: [laravel({
        input: 'resources/js/app.js',
        refresh: true,
    }), svelte(), tailwindcss()],
});
