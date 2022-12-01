<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import {
    NSpin,
    NButton,
    NSpace,
    NUpload,
    NAlert,
    useMessage,
    NScrollbar,
    NRadioButton,
    NRadioGroup,
    UploadCustomRequestOptions,
} from 'naive-ui'
import { toImportInfo } from '../../lib'
import NOTE from '@/assets/images/textures/note_block.png'
import * as Tone from 'tone'
import { Midi } from '@tonejs/midi'
import { Sampler } from 'tone'

const sources = toImportInfo(import.meta.glob('@/assets/sounds/fuze/**/*.mp3', { eager: true }))

const message = useMessage()
const loading = ref(true)

function i(s: string) {
    return new Tone.Sampler({
        urls: { C4: s },
        release: 1,
    }).toDestination()
}
const ns = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const cur = ref<keyof typeof ss>('en')
const res = ref<(keyof typeof ss)[]>([])
var ss: Record<string, Sampler> = {}
for (var s of sources) {
    res.value.push(s.name)
    ss[s.name] = i(s.path)
}

function music(
    n: Parameters<Sampler['triggerAttackRelease']>[0],
    s: Sampler,
    o?: Partial<{
        duration: Parameters<Sampler['triggerAttackRelease']>[1]
        time: Parameters<Sampler['triggerAttackRelease']>[2]
        velocity: Parameters<Sampler['triggerAttackRelease']>[3]
    }>
) {
    s.triggerAttackRelease(n, o?.duration ?? '8n', o?.time, o?.velocity)
}

const autoing = ref(false),
    uploading = ref(false)
const auto = (o: UploadCustomRequestOptions) => {
    uploading.value = true
    const now = Tone.now()
    const syths: Tone.PolySynth[] = []
    o.file.file
        ?.arrayBuffer()
        .then(ab => {
            uploading.value = false
            var midi = new Midi(ab)
            var t = setTimeout(() => {
                while (syths.length) syths.shift()?.dispose()
                clearTimeout(t)
            }, midi.duration * 1000)
            midi.tracks.forEach(t => {
                var sy = new Tone.PolySynth(Tone.Synth, {
                    envelope: {
                        attack: 0.02,
                        decay: 0.1,
                        sustain: 0.3,
                        release: 1,
                    },
                }).toDestination()
                syths.push(sy)
                t.notes.forEach(n =>
                    sy.triggerAttackRelease(n.name, n.duration, n.time + now, n.velocity)
                )
            })
        })
        .catch(() => {
            message.error('wwwwwwwww')
            uploading.value = false
        })
}
const beforeUpload = async (d: any) => {
    if (d.file.file?.type !== 'audio/mid') {
        message.error('MID')
        return false
    }
    return true
}

onMounted(() => {
    Tone.loaded().then(() => (loading.value = false))
})

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
                    v-for="n in ns"
                    :key="n + i"
                    ghost
                    :type="n.includes('#') ? 'tertiary' : 'info'"
                    @click="music(n + i, ss[cur])"
                    @touchstart="music(n + i, ss[cur])"
                >
                    {{ `${n}${i}` }}
                </NButton>
            </NScrollbar>
            <NScrollbar x-scrollable trigger="hover">
                <NRadioGroup v-model:value="cur" name="114514">
                    <NRadioButton
                        v-for="r in res"
                        :key="r"
                        :value="r"
                        @click="music('C4', ss[r], { duration: '4n', velocity: 0.45 })"
                        :label="r"
                    />
                </NRadioGroup>
            </NScrollbar>
        </NSpace>
        <NSpace vertical style="margin-top: 10px">
            <NAlert type="warning">没事 我知道你不懂啥是MIDI</NAlert>
            <NSpin :show="uploading">
                <NUpload :custom-request="auto" @before-upload="beforeUpload">
                    <NButton>UPLOAD MIDI</NButton>
                </NUpload>
            </NSpin>
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
