<script setup lang="ts">
import { NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui/lib'
import { useMain } from '../../store'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { renderLink, renderIcon } from '../../lib/utils/render'
import { watchEffect, watch, ref, onMounted } from 'vue'

const props = defineProps<{
    collapsed?: boolean
    layout: string
    getMenuOptions: () => MenuOption[]
}>()

const store = useMain()
const { t, te } = useI18n()
const route = useRoute()

const current = ref<string>()
const menuOptions = ref<MenuOption[]>()

onMounted(() => {
    current.value = ''
    menuOptions.value = props.getMenuOptions()
})

watchEffect(() => {
    if (route.name !== current.value) current.value = route.name?.toString() ?? ''
})

watch(
    () => store.language,
    (val, old) => {
        if (val !== old) menuOptions.value = menuOptions.value
    }
)

const valueUpdate = (k: any) => {
    current.value = k
}

const renderMenuLabel = (option: MenuOption) => {
    var translate = `layouts.${props.layout}.${option.key}`

    if (!option.link) {
        if (option.label) return option.label as any
        return t(translate)
    }

    if (!te(translate)) return renderLink(option.link, (option.label as any) ?? option.key)()

    var label = t(translate)

    if ('link' in option) return renderLink(option.link, label)()

    return label
}
const renderMenuIcon = (option: MenuOption) => {
    return 'iconType' in option ? renderIcon(option.iconType as any)() : null
}
</script>

<template>
    <n-menu
        :value="current"
        :options="menuOptions"
        :collapsed="collapsed"
        accordion
        @update:value="k => valueUpdate(k)"
        :render-icon="renderMenuIcon"
        :render-label="renderMenuLabel"
    />
</template>
