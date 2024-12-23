<script setup lang="ts">
import type { FirIconButtonProps } from './FirIconButton.types';

const props = withDefaults(defineProps<FirIconButtonProps>(), {
    size: 'medium',
});
const emits = defineEmits(['click']);
</script>

<template>
    <button 
        :class="['fir-icon-button__root', `fir-icon-button__root_${props.size}`]" 
        @click="emits('click')"
        @keyup.prevent
    >
        <slot></slot>
    </button>
</template>

<style>
.fir-icon-button__root {
    border-radius: var(--fir-icon-button-border-radius);
    cursor: pointer;
    background-color: var(--fir-icon-button-bg-color);
    border: var(--fir-icon-button-border);
    transition: var(--fir-global-duration);
    display: flex;
    align-items: center;
    justify-content: center;
}
.fir-icon-button__root_small {
    width: 28px;
    height: 28px;
}
.fir-icon-button__root_medium {
    width: 36px;
    height: 36px;
}
.fir-icon-button__root_large {
    width: 40px;
    height: 40px;
}
.fir-icon-button__root:disabled {
    opacity: 0.8;
}
.fir-icon-button__root:focus {
    border: 1px solid var(--fir-c-primary);
}
.fir-icon-button__root:focus-visible {
    border: 1px solid var(--fir-c-primary);
    outline: none;
}
.fir-icon-button__root:hover:not([disabled]) {
    background-color: var(--fir-icon-button-bg-color-hover);
}
</style>