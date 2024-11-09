<template>
    <button 
        :class="['fir-button__root', props.view, props.size]" 
        @:click="emit('click', $event)"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
import { FirButtonProps } from './FirButton.types';

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
    }
    .fir-button__root:hover {
        opacity: 0.8;
    }
    .fir-button__root.filled {
        border: 1px solid transparent;
        background:var(--fir-color-primary);
    }
    .fir-button__root.outline {
        border: 1px solid var(--fir-color-primary);
        background-color:transparent;
    }
    .fir-button__root.clear {
        border: 1px solid transparent;
        background-color:transparent;
    }
    .small {
        font-size: var(--fir-button-font-size-small);
        padding: var(--fir-button-padding-small);
    }
    .medium {
        font-size: var(--fir-button-font-size-medium);
        padding: var(--fir-button-padding-medium);
    }
    .large {
        font-size: var(--fir-button-font-size-large);
        padding: var(--fir-button-padding-large);
    }
</style>