<script lang="ts" setup>
import Renderer from '../basic/VNodeRender'
import { h } from 'vue'
import { NAvatar, NThing, NSpace } from 'naive-ui'

type Message = {
    avatar?: ReturnType<typeof h> | string
    username?: ReturnType<typeof h> | string
    content: ReturnType<typeof h> | string
}

const props = defineProps<{
    msgs: Message[]
}>()
</script>

<template>
    <NSpace vertical>
        <NThing v-for="(msg, i) in props.msgs" :key="i" content-indented>
            <template #avatar v-if="msg.avatar">
                <NAvatar round>
                    <span v-if="typeof msg.avatar === 'string'">{{ msg.avatar }}</span>
                    <Renderer v-else :content="msg.avatar" />
                </NAvatar>
            </template>
            <template #header v-if="msg.username">
                <small v-if="typeof msg.username === 'string'">{{ msg.username }}</small>
                <Renderer v-else :content="msg.username" />
            </template>
            <template #description>
                <span v-if="typeof msg.content === 'string'" :innerHTML="msg.content"></span>
                <Renderer v-else :content="msg.content" />
            </template>
        </NThing>
    </NSpace>
</template>
