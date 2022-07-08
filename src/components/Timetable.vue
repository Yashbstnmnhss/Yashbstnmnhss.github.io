<script setup lang="ts">
import { NTable, NProgress } from 'naive-ui'
import { Timetable, TimeScope, Time } from '../utils/types'
import { isTimeInRange } from '../utils'

const props = defineProps<{
    content: Timetable
}>()

const formatScope = (scope: TimeScope) => {
    const [start, end] = scope
    function formatTime(time: Time) {
        const [hour, minute, second] = time
        return `${hour}:${minute === 0 ? `00` : minute}${second > 0 ? `:${second}` : ''}`
    }
    return `${formatTime(start)} - ${formatTime(end)}`
}

const nowTime = (): Time => {
    const now = new Date()
    return [now.getHours(), now.getMinutes(), now.getSeconds()]
}
const nowEvent = () => {
    return props.content.find(event => isTimeInRange(nowTime(), event[0]))
}
</script>

<template>
    <n-table>
        <thead>
            <tr>
                <th colspan="2" style="text-align: center">
                    <strong>
                        {{
                            formatScope(
                                nowEvent()?.[0] ?? [
                                    [11, 45, 14],
                                    [19, 19, 810],
                                ]
                            )
                        }}
                        : {{ nowEvent()?.[1] ?? '贰柒柒叁伍叁' }}
                    </strong>
                </th>
            </tr>
            <tr>
                <th>{{ $t('components.TimeTable.time') }}</th>
                <th>{{ $t('components.TimeTable.content') }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="([scope, event], index) in props.content" :key="index">
                <td>{{ formatScope(scope) }}</td>
                <td>
                    {{ event }}
                    <n-progress
                        v-if="isTimeInRange(nowTime(), scope)"
                        :percentage="100"
                        :show-indicator="false"
                        processing
                    />
                </td>
            </tr>
        </tbody>
    </n-table>
</template>
