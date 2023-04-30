import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import yaml from '@modyfi/vite-plugin-yaml'
import compression from 'vite-plugin-compression'
import { resolve } from 'path'

export default defineConfig({
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
        vue({
            include: [/\.vue$/, /\.md$/],
            reactivityTransform: true,
        }),
        pages({
            pagesDir: 'src/views',
            importMode: 'async',
            extensions: ['vue', 'md'],
            routeBlockLang: 'yaml',
        }),
        yaml(),
        compression({
            verbose: true,
            disable: true,
            algorithm: 'gzip',
            ext: '.gz',
        }),
    ],
    build: {
        chunkSizeWarningLimit: 1000,
        /*rollupOptions: {
            output: {
                chunkFileNames: 'script/[name]-[hash].[ext]',
                entryFileNames: 'script/[name]-[hash].[ext]',
                assetFileNames: '[ext]/[name]-[hash].[ext]',
                manualChunks(id) {
                    if (id.includes('node_modules'))
                        return id.toString().split('node_modules/')[1].split('/')[0]
                },
            },
        },*/
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        /*rollupOptions: {
            output: {
                chunkFileNames: 'static/js/[name].[hash].js',
                entryFileNames: 'static/js/[name].[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]',

                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString()
                    }
                },
            },
        },*/
    },
})
