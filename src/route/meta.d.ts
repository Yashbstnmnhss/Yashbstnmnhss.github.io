import 'vue-router'

declare module 'vue-router' {
    interface RouteMeta {
        keepAlive?: boolean
        transition?: string
        menu?: Menu
    }
}

type Menu = {
    for: string
    key: string
    parent?: Omit<Menu, 'for'>
    group?: string
    label?: string
    icon?: string
    order?: number
}
