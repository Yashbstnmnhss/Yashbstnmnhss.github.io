<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { NSpin, NButton, NSpace, NScrollbar, NRadioButton, NRadioGroup, NSelect } from 'naive-ui'
import { pairsToObject } from '../../lib'
import NOTEBLOCK from '@/assets/images/textures/note_block.png'

import * as Tone from 'tone'
import { Sampler } from 'tone'

const props = defineProps<{
    sources: [name: string, file: string][]
}>()

const loading = ref(true)
const current = ref<keyof typeof SAMPLERS>('en')
const sounds = ref<(keyof typeof SAMPLERS)[]>([])

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const SAMPLERS: Record<string, Sampler> = pairsToObject(
    props.sources.map(([name, file]) => {
        sounds.value.push(name)
        return [name, makeSampler(file)]
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
    <NSpin class="music-box" :show="loading">
        <NSpace vertical :align="'center'" :justify="'center'">
            <div id="cube" class="cube3d">
                <div ref="cubeDiv">
                    <span
                        class="top music-box"
                        :style="{ backgroundImage: `url(${NOTEBLOCK})`, '--i': 1 }"
                    >
                    </span>
                    <span
                        class="side music-box"
                        :style="{ backgroundImage: `url(${NOTEBLOCK})`, '--i': 0 }"
                    ></span>
                    <span
                        class="side music-box"
                        :style="{ backgroundImage: `url(${NOTEBLOCK})`, '--i': 1 }"
                    ></span>
                    <span
                        class="side music-box"
                        :style="{ backgroundImage: `url(${NOTEBLOCK})`, '--i': 2 }"
                    ></span>
                    <span
                        class="side music-box"
                        :style="{ backgroundImage: `url(${NOTEBLOCK})`, '--i': 3 }"
                    ></span>
                </div>
            </div>
            <br />
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
            <NSelect
                style="min-width: 15vw"
                @change="val => music('C4', SAMPLERS[val], { duration: '4n', velocity: 0.45 })"
                v-model:value="current"
                :options="sounds.map(val => ({ label: val, value: val }))"
            />
        </NSpace>
    </NSpin>
</template>

<style lang="less" scoped>
.music-box {
    background-repeat: no-repeat !important;
    background-position: center center !important;
    background-clip: border-box !important;
    background-size: contain !important;
    image-rendering: pixelated !important;
}

@keyframes NoteAppear {
    100% {
        opacity: 0;
    }
}

@keyframes CubeRotation {
    0% {
        transform: rotateX(-30deg) rotateY(0deg);
    }
    100% {
        transform: rotateX(-30deg) rotateY(360deg);
    }
}

.cube3d {
    image-rendering: pixelated;
    position: relative;
    width: 5rem;
    aspect-ratio: 1 / 1;
    height: 5rem;
    transform-style: preserve-3d;
    animation: CubeRotation 10s linear infinite;
    div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        .note {
            --i: 1;
            position: absolute;
            top: 0;
            left: 0;
            width: 5rem;
            height: 5rem;
            transform: translateY(-10vh) translateX(7.5vh);
            animation: NoteAppear 0.25s linear 1 forwards;
        }
        span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgb(36, 204, 255);
        }
        .side {
            transform: rotateY(calc(90deg * var(--i))) translateZ(2.5rem);
        }
        .top {
            transform: rotateX(calc(90deg * var(--i))) translateZ(2.5rem);
        }
    }
}
</style>
