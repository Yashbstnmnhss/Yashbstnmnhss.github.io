<route lang="yaml">
name: gcl
</route>

<script setup lang="ts">
import { NH1 } from 'naive-ui'
</script>

<template>
    <NH1>Gladys Chandra & Clea Lukito</NH1>
    <strong class="indonesia">印度尼西亚</strong>
    <svg
        version="1.1"
        id="indonesia_flag"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 150 100"
        style="enable-background: new 0 0 160 100"
        xml:space="preserve"
    >
        <rect x="0" y="0" width="100%" height="50%" style="fill: red" />
        <rect x="0" y="50%" width="100%" height="50%" style="fill: white" />
    </svg>
    im sorry gladys chandra and clea lukito even momo
</template>

<style scoped lang="less">
.indonesia {
    font-size: 100px;
    word-wrap: break-word;
    background: linear-gradient(to bottom, red 50%, white 50%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    user-select: none;

    &:focus {
        user-select: text;
    }
}
</style>
