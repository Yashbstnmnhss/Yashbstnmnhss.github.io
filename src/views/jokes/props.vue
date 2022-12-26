<route lang="yaml">
name: props
meta:
    keepAlive: false
    menu:
        for: jokes
        key: props
        icon: info
        group: footer
</route>

<script setup lang="ts">
import {
    NTabs,
    NTabPane,
    NButton,
    NScrollbar,
    NCard,
    NList,
    NListItem,
    NThing,
    NIcon,
    NSpace,
    NText,
} from 'naive-ui'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMain } from '../../store'
import { Themes, getAchievement, Icons } from '../portal'
import UpdateLog from '../update.vue'

const store = useMain(),
    storeRefs = storeToRefs(store),
    theme = storeRefs.theme,
    achieved = storeRefs.achievements.value.map(k => getAchievement(k))

const darkButtonType = ref('default'),
    lightButtonType = ref('default')

const changeTheme = (val: Themes) => {
    theme.value = val
    updateButtonType()
}
const updateButtonType = () => {
    darkButtonType.value = theme.value === Themes.dark ? 'primary' : 'default'
    lightButtonType.value = theme.value === Themes.light ? 'primary' : 'default'
}
onMounted(() => updateButtonType())
const nowYear = new Date().getFullYear()
</script>

<template>
    <NTabs type="line" animated>
        <NTabPane name="设置">
            <NSpace vertical>
                <NText depth="3"> Bstnmnhss 3 · Vue技术支持 · 2022-{{ nowYear }}</NText>
                <NCard title="主题">
                    <NButton
                        @click="changeTheme(Themes.dark)"
                        :type="(darkButtonType as any)"
                        style="width: 50%; height: 20vh"
                    >
                        <NScrollbar x-scrollable>
                            <span style="font-size: 6vw; word-break: break-all">黑暗</span>
                        </NScrollbar>
                    </NButton>
                    <NButton
                        @click="changeTheme(Themes.light)"
                        :type="(lightButtonType as any)"
                        style="width: 50%; height: 20vh"
                    >
                        <NScrollbar x-scrollable>
                            <span style="font-size: 6vw; word-break: break-all">光明</span>
                        </NScrollbar>
                    </NButton>
                </NCard>
            </NSpace>
        </NTabPane>
        <NTabPane name="成就">
            <NScrollbar x-scrollable trigger="none">
                <NList hoverable clickable>
                    <NListItem v-for="(a, i) in achieved" :key="i">
                        <NThing
                            content-style="margin-top: 10px;"
                            :title="$texta.get(`achievements.${a.title || 'unknownTitle'}`)"
                            :description="
                                $texta.get(`achievements.${a.description || 'unknownDescription'}`)
                            "
                        >
                            <template #header-extra>
                                {{ a.type }}
                            </template>
                            <template #avatar>
                                <NIcon
                                    size="50"
                                    :color="a.type === 'fantastic' ? 'orange' : 'rgb(36,204,255)'"
                                >
                                    <Component
                                        :is="Icons[a.icon && a.icon in Icons ? a.icon : 'medal']"
                                    />
                                </NIcon>
                            </template>
                        </NThing>
                    </NListItem>
                </NList>
            </NScrollbar>
        </NTabPane>
        <NTabPane name="后记">
            <UpdateLog />
        </NTabPane>
    </NTabs>
</template>
