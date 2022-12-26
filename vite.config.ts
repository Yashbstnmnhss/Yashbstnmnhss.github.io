import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import markdown from 'vite-plugin-md'
import yaml from '@modyfi/vite-plugin-yaml'
import compression from 'vite-plugin-compression'
import { resolve } from 'path'
import hljs, { HighlightOptions } from 'highlight.js'

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
        /*markdown({
            markdownItOptions: {
                html: true,
                linkify: true,
                typographer: true,
                highlight: (str: string | HighlightOptions, lang: string) => {
                    if (lang && hljs.getLanguage(lang)) {
                        try {
                            return hljs.highlight(lang, str).value
                        } catch (__) {}
                    }
                    return ''
                },
            },
            markdownItSetup(md) {
                md.use(require('markdown-it-emoji'), {
                    shortcuts: {
                        ':)': 'smile',
                        ':D': 'laughing',
                        ':p': 'stuck_out_tongue_winking_eye',
                        ':P': 'stuck_out_tongue_closed_eyes',
                        ':(': 'disappointed',
                        ':|': 'expressionless',
                        ':o': 'open_mouth',
                        ':O': 'open_mouth',
                        ':*': 'kissing_heart',
                        ':\\': 'confused',
                        ':@': 'rage',
                        ':s': 'confounded',
                        ':S': 'confounded',
                        ':$': 'yum',
                        ':^': 'relieved',
                        ':&': 'satisfied',
                        ':%': 'mask',
                    },
                })
            },
        }), */
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
