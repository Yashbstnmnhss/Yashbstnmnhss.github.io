<route lang="yaml">
name: gcl-books-yandere
meta:
    menu:
        for: jokes
        key: gcl-books-yandere
        icon: bookmark
        parent:
            key: gcl-books
            icon: book
            parent:
                key: gcl
</route>

<script setup lang="ts">
import { NH1, NTabs, NTabPane, NBlockquote } from 'naive-ui'
</script>

<template>
    <NH1>{{ $texta.get(['menus', 'jokes', 'gcl-books-yandere']) }}</NH1>
    <NTabs animated size="large" pane-class="tab-pane-style">
        <NTabPane name="C1">
            <NBlockquote>
                I understand you're crying again? <br />
                Sad? <br />
                But I was here yesterday. <br />
                You're happy too. <br />
                They're both in their voice, <br />
                chatting. <br />
                sy malahan ngehibur sy sendiri. <br />
                If I chat you you always throw it on another topic, <br />
                if you don't say I'm ornate I can't support blah blah blah I did, <br />
                didn't I? <br />
                This is my pure opinion. <br />
                I didn't do it. <br />
            </NBlockquote>
        </NTabPane>
        <NTabPane name="C2">
            <NBlockquote>
                This is pretty good, <br />
                huh? <br />
                I think you might. <br />
                <mark>I hate him.</mark> <br />
                I hate him. <br />
                dan anda. <br />
                <mark>just you.</mark> <br />
                I told you not to think about it. <br />
                It's just y, <br />
                <mark>I'll still be you.</mark> <br />
            </NBlockquote>
        </NTabPane>
        <NTabPane name="C3">
            <NBlockquote>
                Oh, <br />
                and also, <br />
                you're asking someone else to be nice to you after the robbery. <br />
                But after <mark>the guy stole you?</mark> <br />
                Well, <br />
                maybe it's because you're close, <br />
                huh? <br />
                You're the same person when you're in good mode. <br />
                I don't know if this is a message we're going in there, <br />
                but you. <br />
                just you. <br />
                <mark>just you</mark>. <br />
                Move in. <br />
            </NBlockquote>
        </NTabPane>
        <NTabPane name="C4">
            <NBlockquote>
                are you tired with me? <br />
                you do really gonna left me right? <br />
                you're not bother me, i need you to not left, just that <br />
                if you left
                <br />
                maybe i will sad <br />
                but no cry <br />
                just sad <br />
                and need time to used to it <br />
                or maybe cry <br />
                you're depressed <br />
                im not depressed, im not suicide <br />
                can you give me your twit? <br />
                if you left me suddenly without saying anything
                <br />
                can i text you at twit? <br />
                ah
            </NBlockquote>
        </NTabPane>
    </NTabs>
</template>
