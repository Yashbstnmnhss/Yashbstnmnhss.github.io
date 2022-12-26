<script setup lang="ts">
import {
    NCard,
    NTime,
    NCountdown,
    NH1,
    CountdownProps,
    NStatistic,
    NNumberAnimation,
    NSpace,
    NProgress,
} from 'naive-ui'
import { computed, h } from 'vue'

const props = defineProps<{
    date: Date
    target: string
    title?: string
    progressTooltip?: string
}>()

const today = new Date()
const thisYearBirthday = new Date(
    today.getFullYear(),
    props.date.getMonth(),
    props.date.getDate(),
    props.date.getHours(),
    props.date.getMinutes(),
    props.date.getSeconds(),
    props.date.getMilliseconds()
)
const nextBirthday =
    today > thisYearBirthday
        ? new Date(
              today.getFullYear() + 1,
              props.date.getMonth(),
              props.date.getDate(),
              props.date.getHours(),
              props.date.getMinutes(),
              props.date.getSeconds(),
              props.date.getMilliseconds()
          )
        : thisYearBirthday
const isTodayBirthday =
    today.getFullYear() === nextBirthday.getFullYear() &&
    today.getMonth() === nextBirthday.getMonth() &&
    today.getDate() === nextBirthday.getDate()

const diffTime = computed(() => {
    const diff = nextBirthday.getTime() - today.getTime()
    return diff > 0 ? diff : 0
})
const renderCountdown: CountdownProps['render'] = ({ hours, minutes, seconds }) => {
    const days = Math.floor(hours / 24)
    const hours2 = hours % 24
    return h(
        NH1,
        {
            prefix: 'bar',
            type: diffTime.value < 0 ? 'error' : diffTime.value === 0 ? 'success' : 'warning',
        },
        {
            default: () =>
                '🎉 ' + days + '天 ' + hours2 + '时 ' + minutes + '分 ' + seconds + '秒 ',
        }
    )
}
const progress = computed(() => {
    if (isTodayBirthday) return 100
    const days = 365 - Math.floor(diffTime.value / (1000 * 60 * 60 * 24))
    if (days > 365) return 100
    if (days < 0) return 0
    const daysPercent = Math.ceil((days / 365) * 100)
    return daysPercent
})
</script>

<template>
    <NCard :title="props.title">
        <template #header-extra>
            <NTime :time="props.date" type="date" />
        </template>
        <div v-if="isTodayBirthday">
            <slot name="onbirthday"></slot>
        </div>
        <slot name="description"></slot>
        <br />
        <NCountdown :render="renderCountdown" :duration="diffTime" active />
        <NCard hoverable>
            <NSpace :align="'stretch'" :justify="'space-between'">
                <NStatistic label="现在已经" tabular-nums>
                    <NNumberAnimation
                        :duration="6000"
                        :from="0"
                        :to="today.getFullYear() - props.date.getFullYear()"
                    />
                    <template #suffix> 岁 </template>
                </NStatistic>
                <slot name="bar-extra"></slot>
            </NSpace>
            <template #action>
                <NProgress
                    :title="props.progressTooltip"
                    processing
                    :height="14"
                    :percentage="progress"
                    border-radius="12px 12px 0 0"
                    fill-border-radius="12px 0 12px 12px"
                />
            </template>
        </NCard>
        <slot name="extra"></slot>
    </NCard>
</template>
