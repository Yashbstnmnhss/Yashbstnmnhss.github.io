<template>
    <span class="spoiler">
        <slot />
    </span>
</template>

<style scoped>
.spoiler {
    background-color: black;
    color: black;
    cursor: help;
    transition: color .2s ease .25s;
}
    .spoiler:hover,
    .spoiler:focus {
        color: white;   
    }
</style>