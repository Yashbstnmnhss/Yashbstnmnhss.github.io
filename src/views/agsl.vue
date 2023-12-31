<script setup lang="ts">
import { NSpace, NH1, NAlert, NCard, NBlockquote } from 'naive-ui'
import MusicBox from '../components/models/FuMusicBox.vue'
</script>
<template>
    <NSpace vertical style="margin: 1rem">
        <NH1 prefix="bar">AGSL {{ new Date().toLocaleDateString() }}</NH1>
        <NAlert type="info" show-icon
            >自2024年起 本站不再记载乐子

            <NBlockquote>
                富赜春思人 独守空人坟<br />
                福泽香霎鼻 思人在一齐
            </NBlockquote>
        </NAlert>
        <NCard title="音盒">
            <MusicBox style="margin-top: 1rem" />
        </NCard>
    </NSpace>
</template>
