import { Component, h } from 'vue'
import { RouterLink } from 'vue-router'
import { NIcon, NEllipsis } from 'naive-ui'

export function renderLink(link: any, label: any) {
    return () => h(RouterLink, typeof link === 'string' ? {
        to: link as string
    } : link, {
        default: () => h(NEllipsis, null, {
            default: () => label
        })
    })
}
export function renderIcon(icon: Component) {
    return () => h(NIcon, null, {
        default: () => h(icon)
    }) 
}