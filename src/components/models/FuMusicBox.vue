<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { NSpin, NButton, NSpace, NScrollbar, NRadioButton, NRadioGroup } from 'naive-ui'
import { toImportInfo, pairsToObject } from '../../lib'
import NOTE from '@/assets/images/textures/note_block.png'
import * as Tone from 'tone'
import { Sampler } from 'tone'

const sources = toImportInfo(import.meta.glob('@/assets/sounds/fuze/**/*.mp3', { eager: true }))
const loading = ref(true)
const current = ref<keyof typeof SAMPLERS>('en')
const sounds = ref<(keyof typeof SAMPLERS)[]>([])

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const SAMPLERS: Record<string, Sampler> = pairsToObject(
    sources.map(imp => {
        sounds.value.push(imp.name)
        return [imp.name, makeSampler(imp.path)]
    })
)
function makeSampler(sound: string) {
    return new Tone.Sampler({
        urls: { C4: sound },
        release: 1,
    }).toDestination()
}

const music = (
    note: Parameters<Sampler['triggerAttackRelease']>[0],
    sampler: Sampler,
    options?: Partial<{
        duration: Parameters<Sampler['triggerAttackRelease']>[1]
        time: Parameters<Sampler['triggerAttackRelease']>[2]
        velocity: Parameters<Sampler['triggerAttackRelease']>[3]
    }>
) => sampler.triggerAttackRelease(note, options?.duration ?? '8n', options?.time, options?.velocity)

onMounted(() => Tone.loaded().then(() => (loading.value = false)))

onUnmounted(() => {
    Tone.Transport.cancel()
    Tone.Transport.dispose()
})
</script>

<template>
    <NSpin class="music-box" :style="`background-image:url(${NOTE})`" :show="loading">
        <NSpace vertical :align="'center'" :justify="'center'">
            <NScrollbar x-scrollable v-for="i in [5, 4, 3]" :key="i">
                <NButton
                    style="text-align: center"
                    v-for="n in NOTES"
                    :key="n + i"
                    ghost
                    :type="n.includes('#') ? 'tertiary' : 'info'"
                    @click="music(n + i, SAMPLERS[current])"
                    @touchstart="music(n + i, SAMPLERS[current])"
                >
                    {{ `${n}${i}` }}
                </NButton>
            </NScrollbar>
            <NScrollbar x-scrollable trigger="hover">
                <NRadioGroup v-model:value="current" name="114514">
                    <!--<NSpace :size="0">-->
                    <NRadioButton
                        v-for="r in sounds"
                        :key="r"
                        :value="r"
                        @click="music('C4', SAMPLERS[r], { duration: '4n', velocity: 0.45 })"
                        :label="r"
                    />
                    <!--</NSpace>-->
                </NRadioGroup>
            </NScrollbar>
        </NSpace>
    </NSpin>
</template>

<style lang="less" scoped>
.music-box {
    background-repeat: no-repeat;
    background-position: center center;
    background-clip: border-box;
    background-size: contain;
    image-rendering: pixelated;
}
</style>
