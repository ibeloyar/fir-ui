<template>
    <button :class="{
        'fir-chip__wrapper': true, 
        [`fir-chip__${props.color}`]: true,
        [`fir-chip__${props.view}`]: true,
        ['fir-chip__wrapper_clickable']: !!props.onClick,
        }"
        @click="onAction"
        @keyup.prevent
        >
        <span 
            class="fir-chip__title"
            v-if="props.type === 'double'"
        >
            {{ props.title }}
        </span>
        <span
            class="fir-modal__chip_content"
        >
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import type { FirChipProps } from './FirChip.types';

const props = withDefaults(defineProps<FirChipProps>(), {
    type: 'default',
    view: 'filled',
});

const onAction = (...args) => props.onClick && props.onClick();

</script>

<style>
    .fir-chip__wrapper {
        box-sizing: border-box;
        display: inline-block;
        padding: 2px 6px;
        border-radius: var(--fir-chip-border-radius);
        font-size: var(--fir-chip-font-size);
        letter-spacing: 0.24px;
        max-width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .fir-chip__wrapper_clickable {
        cursor: pointer;
    }
    .fir-chip__title {
        padding-right: 4px;
        border-right: 1px solid black;
    }
    .fir-chip__filled.fir-chip__red {
        border: 1px solid var(--fir-color-red-lighter-1);
        background-color: var(--fir-color-red-lighter-1);
        color: var(--fir-color-red-darker);
    }
    .fir-chip__filled.fir-chip__yellow {
        border: 1px solid var(--fir-color-yellow-lighter);
        background-color: var(--fir-color-yellow-lighter);
        color: var(--fir-color-yellow-darker);
    }
    .fir-chip__filled.fir-chip__green {
        border: 1px solid var(--fir-color-green-lighter-1);
        background-color: var(--fir-color-green-lighter-1);
        color: var(--fir-color-green-darker);
    }
    .fir-chip__filled.fir-chip__blue {
        border: 1px solid var(--fir-color-blue-lighter-1);
        background-color: var(--fir-color-blue-lighter-1);
        color: var(--fir-color-blue-darker);
    }
    .fir-chip__filled.fir-chip__gray {
        border: 1px solid var(--fir-color-gray-light-3);
        background-color: var(--fir-color-gray-light-3);
        color: var(--fir-color-gray-dark-3);
    }
    .fir-chip__outlined.fir-chip__red {
        border: 1px solid var(--fir-color-red-darker);
        color: var(--fir-color-red-darker);
    }
    .fir-chip__outlined.fir-chip__yellow {
        border: 1px solid var(--fir-color-yellow-darker);
        color: var(--fir-color-yellow-darker);
    }
    .fir-chip__outlined.fir-chip__green {
        border: 1px solid var(--fir-color-green-darker);
        color: var(--fir-color-green-darker);
    }
    .fir-chip__outlined.fir-chip__blue {
        border: 1px solid var(--fir-color-blue-darker);
        color: var(--fir-color-blue-darker);
    }
    .fir-chip__outlined.fir-chip__gray {
        border: 1px solid var(--fir-color-gray-dark-3);
        color: var(--fir-color-gray-dark-3);
    }
</style>