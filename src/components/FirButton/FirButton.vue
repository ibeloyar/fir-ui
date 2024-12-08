<template>
    <button 
        :class="[
            'fir-button__root', 
            `fir-button__${props.view}`,
            `fir-button__${props.size}`
        ]" 
        @:click="emit('click', $event)"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import type { FirButtonProps } from './FirButton.types';

const props = withDefaults(defineProps<FirButtonProps>(), {
    view: 'filled',
    size: 'medium',
});

const emit = defineEmits(['click']);
</script>

<style>
    .fir-button__root {
        transition: var(--fir-global-duration);
        border-radius: var(--fir-global-border-radius);
        cursor: pointer;
        color: var(--fir-global-text-color);
    }
    .fir-button__root:disabled {
        cursor: default;
    }
    .fir-button__root.fir-button__filled {
        border: 1px solid transparent;
        background:var(--fir-color-primary);
    }
    .fir-button__root.fir-button__filled:disabled {
        color: var(--fir-global-text-disabled-color);
        border: 1px solid transparent;
        background:var(--fir-button-bg-disable);
    }
    .fir-button__root.fir-button__outline {
        border: 1px solid var(--fir-color-primary);
        background-color:transparent;
        color: var(--fir-color-primary);
    }
    .fir-button__root.fir-button__outline:disabled {
        color: var(--fir-global-text-disabled-color);
        border: 1px solid var(--fir-global-border-color-disabled);
    }
    .fir-button__root.fir-button__clear {
        border: 1px solid transparent;
        background-color:transparent;
    }
    .fir-button__root.fir-button__clear:disabled {
        color: var(--fir-global-text-disabled-color);
    }
    .fir-button__small {
        font-size: var(--fir-button-font-size-small);
        padding: var(--fir-button-padding-small);
    }
    .fir-button__medium {
        font-size: var(--fir-button-font-size-medium);
        padding: var(--fir-button-padding-medium);
    }
    .fir-button__large {
        font-size: var(--fir-button-font-size-large);
        padding: var(--fir-button-padding-large);
    }
    .fir-button__root:hover:not([disabled]) {
        opacity: 0.8;
    }    
    .fir-button__root.fir-button__filled:hover:not([disabled]) {
        opacity: 1;
        background-color: var(--fir-button-hover-bg);
    }
</style>