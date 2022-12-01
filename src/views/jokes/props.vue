<route lang="yaml">
name: props
meta:
    keepAlive: false
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
} from 'naive-ui'
import { MedalOutline } from '@vicons/ionicons5'
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMain } from '../../store'
import { Themes, getAchievement } from '../portal'
import UpdateLog from '../update.md'

const store = useMain(),
    storeRefs = storeToRefs(store),
    theme = storeRefs.theme,
    achieved = storeRefs.achievements.value.map(k => getAchievement(k))

const darkButTyp = ref('default'),
    lightButTyp = ref('default')

const changeTheme = (val: Themes) => {
    theme.value = val
    updateTheButTyp()
}
const updateTheButTyp = () => {
    darkButTyp.value = theme.value === Themes.dark ? 'primary' : 'default'
    lightButTyp.value = theme.value === Themes.light ? 'primary' : 'default'
}
onMounted(() => updateTheButTyp())
</script>

<template>
    <NTabs type="line" animated>
        <NTabPane name="设置">
            <NCard title="主题">
                <NButton
                    @click="changeTheme(Themes.dark)"
                    :type="(darkButTyp as any)"
                    style="width: 50%; height: 20vh"
                >
                    <NScrollbar x-scrollable>
                        <span style="font-size: 6vw; word-break: break-all">黑暗</span>
                    </NScrollbar>
                </NButton>
                <NButton
                    @click="changeTheme(Themes.light)"
                    :type="(lightButTyp as any)"
                    style="width: 50%; height: 20vh"
                >
                    <NScrollbar x-scrollable>
                        <span style="font-size: 6vw; word-break: break-all">光明</span>
                    </NScrollbar>
                </NButton>
            </NCard>
        </NTabPane>
        <NTabPane name="成就">
            <NList hoverable clickable>
                <NListItem v-for="(a, i) in achieved" :key="i">
                    <NThing
                        content-style="margin-top: 10px;"
                        :title="$t(`achievements.${a.title || 'unknownTitle'}`)"
                        :description="$t(`achievements.${a.description || 'unknownDescription'}`)"
                    >
                        <template #header-extra>
                            {{ a.type }}
                        </template>
                        <template #avatar>
                            <NIcon
                                size="50"
                                :color="a.type === 'fantastic' ? 'orange' : 'rgb(36,204,255)'"
                            >
                                <MedalOutline />
                            </NIcon>
                        </template>
                    </NThing>
                </NListItem>
            </NList>
        </NTabPane>
        <NTabPane name="更新日志">
            <UpdateLog />
        </NTabPane>
    </NTabs>
</template>
