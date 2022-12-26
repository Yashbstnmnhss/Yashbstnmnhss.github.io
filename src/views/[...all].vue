<script setup lang="ts">
import { NWatermark, NResult } from 'naive-ui'
import { ref } from 'vue'
import { useAchiever } from './portal'

const achiever = useAchiever()
const url = ref('')

const onPlay = () => {
    achiever.achieve('nearer_my_master')
    url.value = 'https://scp-wiki.wdfiles.com/local--files/fragment:scp-6000-3/interior.jpg'
}
</script>

<template>
    <NWatermark
        content="NOT FOUND"
        fullscreen
        cross
        :font-size="16"
        :line-height="16"
        :width="384"
        :height="384"
        :x-offset="12"
        :y-offset="60"
        :rotate="-15"
    />
    <NResult
        :style="'background:url(' + url + ') center center / cover no-repeat;'"
        class="page-margin"
        status="404"
        title="404"
        description="未知的深渊"
        size="huge"
    >
        <template #footer>?</template>
    </NResult>
    <audio
        class="player-center"
        title="6999"
        src="http://topia.wdfiles.com/local--files/nearer-my-god-to-thee/hymn.mp3"
        controls
        loop
        @play="onPlay()"
    />
</template>

<style scoped>
.page-margin {
    margin: 100px;
    transition: background-image 0.2s ease 0.25s;
}
.player-center {
    margin-top: 75rem;
    width: 100%;
}
</style>
