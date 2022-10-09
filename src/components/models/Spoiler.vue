<template>
    <span class="spoiler">
        <slot />
    </span>
</template>

<style scoped lang="less">
.spoiler {
    background-color: black;
    color: black;
    cursor: help;
    transition: color .2s ease .25s;

    &:hover,
    &:focus {
        color: white;
    }
}
</style>