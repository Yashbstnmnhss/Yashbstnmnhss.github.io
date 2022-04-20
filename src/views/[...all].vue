<script setup lang="ts">
import { 
    NWatermark, 
    NResult 
} from 'naive-ui'
import { ref } from 'vue'

const url = ref('')
</script>

<template>
    <n-watermark
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
    <n-result
        :style="'background:url(' + url + ') center center / cover no-repeat;'"
        class="page-margin"
        status="404"
        title="404"
        description="Not Found"
        size="huge">
        <template #footer>
            ?
        </template>
    </n-result>
    <audio 
        class="player-center" title="6999"
        src="http://topia.wdfiles.com/local--files/nearer-my-god-to-thee/hymn.mp3" 
        controls loop
        @play="url = 'https://scp-wiki.wdfiles.com/local--files/fragment:scp-6000-3/interior.jpg'"
    />
</template>

<style scoped>
.page-margin {
    margin: 100px;
    transition: background-image .2s ease .25s;
}
.player-center {
    margin-top: 75rem;
    width: 100%;
}
</style>