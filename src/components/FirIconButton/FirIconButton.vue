<template>
    <button class="fir-icon-button__root">
        <slot>
            <svg width="20" height="20" viewBox="0 0 20 20">
                <path 
                    d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z" 
                    stroke="currentColor" 
                    fill="none" 
                    fill-rule="evenodd" 
                    stroke-linejoin="round">
                </path>
            </svg>
        </slot>
    </button>
</template>

<script setup lang="ts">
import type { FirIconButtonProps } from './FirIconButton.types';

const props = withDefaults(defineProps<FirIconButtonProps>(), {
    size: 'medium',
});
console.log(props);
</script>

<style>
    .fir-icon-button__root {
        width: 36px;
        height: 36px;
        border-radius: var(--fir-icon-button-border-radius);
        cursor: pointer;
        background-color: var(--fir-icon-button-bg-color);
        border: var(--fir-icon-button-border);
        transition: var(--fir-global-duration);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .fir-icon-button__root:disabled {
        opacity: 0.8;
    }
    .fir-icon-button__root:focus {
        border: 1px solid var(--fir-color-primary);
    }
    .fir-icon-button__root:focus-visible {
        border: 1px solid var(--fir-color-primary);
        outline: none;
    }
    .fir-icon-button__root:hover:not([disabled]) {
        background-color: var(--fir-icon-button-bg-color-hover);
    }
</style>