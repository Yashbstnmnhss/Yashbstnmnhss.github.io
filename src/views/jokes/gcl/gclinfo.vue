<route lang="yaml">
name: gcl
</route>

<script setup lang="ts">
import { NH1, NTable } from 'naive-ui'
</script>

<template>
    <NH1>Gladys Chandra & Clea Lukito</NH1>
    <NTable>
        <thead>
            <tr>
                <th>人</th>
                <th>臃肿</th>
                <th>抑郁</th>
                <th>印尼语</th>
                <th>有病</th>
                <th>单纯</th>
                <th>魈厨</th>
                <th>正常女生</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Clea Lukito</td>
                <td>微</td>
                <td>是</td>
                <td>是</td>
                <td>极是</td>
                <td>否</td>
                <td>极是</td>
                <td>极否</td>
            </tr>
            <tr>
                <td>Gladys Chandra</td>
                <td>是</td>
                <td>微</td>
                <td>是</td>
                <td>否</td>
                <td>是</td>
                <td>否</td>
                <td>是</td>
            </tr>
        </tbody>
    </NTable>
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
