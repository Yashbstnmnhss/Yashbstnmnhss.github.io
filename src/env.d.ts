/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '*.md' {
    import type { ComponentOptions } from 'vue'
    const component: ComponentOptions
    export default component
}

declare module '*.yaml' {
    const content: any
    export default content
}

declare module 'virtual:datapack' {
    const datapacks: Record<string, unknown>
    export default datapacks
}

declare module '*.vtt' {
    const path: string
    export default path
}
