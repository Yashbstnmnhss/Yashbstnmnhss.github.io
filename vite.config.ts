import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import markdown from 'vite-plugin-md'
import yaml from '@modyfi/vite-plugin-yaml'
import { resolve } from 'path'
import hljs, { HighlightOptions } from 'highlight.js'

export default defineConfig({
    base: './',
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        },
    },
    plugins: [
        vue({
            include: [
                /\.vue$/, 
                /\.md$/
            ]
        }),
        pages({
            pagesDir: 'src/views',
            importMode: 'async',
            extensions: [
                'vue',
                'md'
            ],
            routeBlockLang: 'yaml'
        }),
        markdown({
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
                }
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
                        ':%': 'mask'
                    }
                })
            }
        }),
        yaml()
    ]
})
