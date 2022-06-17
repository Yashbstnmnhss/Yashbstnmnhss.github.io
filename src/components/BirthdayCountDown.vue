<script setup lang="ts">
import {
    NCard,
    NTime,
    NCountdown,
    NH1,
    CountdownProps,
    NStatistic,
    NNumberAnimation,
    NTable,
    NProgress,
} from 'naive-ui'
import { computed, h } from 'vue'

const props = defineProps<{
    date: Date
    target: string
    title?: string
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
            default: () => '🎉 ' + days + 'd ' + hours2 + 'h ' + minutes + 'm ' + seconds + 's ',
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
    <n-card :title="props.title">
        <template #header-extra>
            <n-time :time="props.date" type="date" />
        </template>
        <div v-if="isTodayBirthday">
            <slot name="onbirthday"></slot>
        </div>
        <slot name="description"></slot>
        <br />
        <n-countdown :render="renderCountdown" :duration="diffTime" active />
        <n-table>
            <tbody>
                <tr>
                    <td>
                        <n-statistic
                            :label="$t('components.BirthdayCountdown.yearlabel')"
                            tabular-nums
                        >
                            <n-number-animation
                                :duration="6000"
                                :from="0"
                                :to="today.getFullYear() - props.date.getFullYear()"
                            />
                            <template #suffix>
                                {{ $t('components.BirthdayCountdown.yearold') }}
                            </template>
                        </n-statistic>
                    </td>
                    <td>
                        <n-progress :percentage="progress"></n-progress>
                    </td>
                </tr>
            </tbody>
        </n-table>
        <slot name="extra"></slot>
    </n-card>
</template>
