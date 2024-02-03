import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',

    title: 'Bocument',
    description: 'Bstnmnhss Archives',

    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',

        navbar: ['/', '/get-started'],
    }),

    bundler: viteBundler(),
})
