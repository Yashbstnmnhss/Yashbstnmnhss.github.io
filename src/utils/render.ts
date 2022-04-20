import { h } from 'vue'
import { RouterLink } from 'vue-router'
import { NIcon, NEllipsis } from 'naive-ui'

export function renderLink(link: any, label: any) {
    return () => h(RouterLink, link, {
        default: () => h(NEllipsis, null, {
            default: () => label
        })
    })
}
export function renderIcon(icon: any) {
    return () => h(NIcon, null, {
        default: () => h(icon)
    }) 
}