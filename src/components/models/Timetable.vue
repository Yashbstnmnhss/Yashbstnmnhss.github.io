<script setup lang="ts">
import { NTable, NProgress } from 'naive-ui'
import { isTimeInRange } from '../../lib/utils'
import type { Timetable, TimeScope, Time } from '../../lib/types'

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
    <NTable>
        <thead>
            <tr>
                <th colspan="2" style="text-align: center; word-wrap: break-word">
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
                <th>时间</th>
                <th>事件</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="([scope, event], index) in props.content" :key="index">
                <td>{{ formatScope(scope) }}</td>
                <td>
                    {{ event }}
                    <NProgress
                        v-if="isTimeInRange(nowTime(), scope)"
                        :percentage="100"
                        :show-indicator="false"
                        processing
                    />
                </td>
            </tr>
        </tbody>
    </NTable>
</template>
