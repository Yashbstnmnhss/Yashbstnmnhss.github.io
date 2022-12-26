<script setup lang="ts">
import { NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui/lib'
import { useMain } from '../../store'
import { useRoute } from 'vue-router'
import { useTexta, valueToString, renderLink, renderIcon } from '../../lib'
import { watchEffect, watch, ref, onMounted } from 'vue'

const props = defineProps<{
    collapsed?: boolean
    layout: string
    getMenuOptions: () => MenuOption[]
}>()

const store = useMain()
const texta = useTexta()
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

const valueUpdate = (k: any) => (current.value = k)

const renderMenuLabel = (option: MenuOption) => {
    var path = (key: string) => ['menus', props.layout, key]
    var keyPath = path(valueToString(option.key))
    var labelPath = path(valueToString(option.label))

    if (!option.link) {
        if (option.label) return option.label as any
        return texta.get(keyPath, option)
    }

    if (!texta.has(keyPath))
        return renderLink(
            option.link,
            typeof option.label === 'string' && texta.has(labelPath)
                ? texta.get(labelPath, option)
                : (option.label as any) ?? option.key
        )()

    var label = texta.get(keyPath, option)

    if ('link' in option) return renderLink(option.link, label)()

    return label
}
const renderMenuIcon = (option: MenuOption) => {
    return 'iconType' in option ? renderIcon(option.iconType as any)() : null
}
</script>

<template>
    <NMenu
        :value="current"
        :options="menuOptions"
        :collapsed="collapsed"
        :collapsed-width="0"
        accordion
        @update:value="k => valueUpdate(k)"
        :render-icon="renderMenuIcon"
        :render-label="renderMenuLabel"
    />
</template>

<style scoped>
* {
    user-select: none;
}
</style>
