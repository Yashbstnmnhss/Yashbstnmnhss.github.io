import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'
import router from 'unplugin-vue-router/vite'
import datapack from './plugins/datapack'
import { resolve } from 'path'

export default defineConfig(({ mode, command }) => {
    function onProduction<T>(value: T) {
        return command === 'build' || mode === 'production' ? value : undefined
    }
    return {
        base: './',
        assetsInclude: ['**/*.vtt', '**/*.srt'],
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    typescriptEnabled: true,
                },
            },
        },
        resolve: {
            alias: {
                '@': resolve(__dirname, './src'),
            },
        },
        json: {
            stringify: true,
        },
        plugins: [
            datapack({
                rootDir: 'src/data/',
                schema: {
                    menus: 'array',
                },
            }),
            router({
                routesFolder: 'src/views',
                extensions: ['.vue', '.tsx'],
                exclude: onProduction(['*.dev.vue', '*.dev.tsx']) ?? [],
                importMode: 'async',
                routeBlockLang: 'yaml',
            }),
            vue({
                include: [/\.vue$/],
                exclude: onProduction([/\.dev\.vue$/]),
            }),
            jsx({
                exclude: onProduction([/\.dev\.tsx$/]),
            }),
        ],
        build: {
            chunkSizeWarningLimit: 1000,
        },
    }
})
