/// <reference types="vite/client" />
/// <reference types="vue/macros-global" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite-plugin-md/dist/" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '*.md' {
    import type { ComponentOptions } from 'vue'
    const Component: ComponentOptions
    export default Component
}

declare module '*.yaml' {
    const Content: any
    export default Content
}

declare module '*.vtt' {
    const Path: string
    export default Path
}