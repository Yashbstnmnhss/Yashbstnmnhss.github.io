import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'

export default defineUserConfig({
    lang: 'zh-CN',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/favicon.ico',
            },
        ],
        [
            'link',
            {
                rel: 'stylesheet',
                href: '/style.css',
            },
        ],
    ],

    title: 'Bocument',
    description: 'Bstnmnhss Archives',

    theme: defaultTheme({
        logo: '/favicon.ico',
        navbar: ['/', '/calc'],
    }),

    bundler: viteBundler(),
    plugins: [
        mdEnhancePlugin({
            katex: true,
            sub: true,
            sup: true,
            footnote: true,
            gfm: true,
        }),
    ],
})
