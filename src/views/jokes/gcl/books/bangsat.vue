<route lang="yaml">
name: gcl-books-bangsat
</route>

<script setup lang="ts">
import { NH1, NTabs, NTabPane, NBlockquote } from 'naive-ui'
import { randomRepeat } from '../../../../lib/utils/'

const sheeps = randomRepeat('🐑', 1, 20)
</script>

<template>
    <n-h1>{{ $t('layouts.JokesLayout.gcl-books-bangsat') }}</n-h1>
    <n-tabs animated size="large" pane-class="tab-pane-style">
        <n-tab-pane name="2022/04/16">
            <n-blockquote>
                gila mereka udah
                <br />
                didiemin nyolot
                <br />
                diajak bicara mereka juga cuman ketawa
                <br />
                maunya apa sih?
                <br />
                xiao si wole xiao si wole
                <br />
                gajelas
                <br />
                situasi serius aja dia gak ngerti
                <br />
                mereka bahkan masih bisa ngejek
                <br />
                kirim foto kita ke orang lain
                <br />
                lain kali, kita ketawa aja kalo mereka ngomong apapun
                <br />
                bangsat emang
                <br />
            </n-blockquote>
        </n-tab-pane>
        <n-tab-pane name="2022/04/19">
            <n-blockquote>
                bang
                <br />
                lama lama kita kayak hilang di grup sana
                <br />
                bagus deh
                <br />
                mereka ga bully lagi
                <br />
                {{ sheeps }}
                <br />
                kemaren sih masih
                <br />
                tapi gatau kalo kedepannya
                <br />
                sy harap ngga.
                <br />
            </n-blockquote>
        </n-tab-pane>
        <n-tab-pane name="2022/04/26">
            <n-blockquote>
                <strong title="Clea Lukito">
                    <u title="Clea Lukito">@vallen</u>
                </strong>
                bang
                <br />
                mereka
                <br />
                nanya dia siapa?
                <br />
                TOLOL, ITU TEMEN KITA MEREKA
                <br />
                NGGA KENAL ..
                <br />
                shit
                <br />
                <strong title="Clea Lukito">
                    <u title="Clea Lukito">@vallen</u>
                </strong>
                chat sy kalo udh on dimana aja
                <br />
                tobat kalian pls
                <br />
                jangan kek begini
                <br />
                emosi sy
                <br />
            </n-blockquote>
        </n-tab-pane>
    </n-tabs>
</template>
