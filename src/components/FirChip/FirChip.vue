<template>
    <button :class="{
                'fir-chip__wrapper': true, 
                [`fir-chip__${props.color}`]: true,
                [`fir-chip__${props.view}`]: true,
                ['fir-chip__wrapper_clickable']: !!props.onClick,
            }"
            @click="onAction"
            @keyup.prevent
            :style="{ ['background-color']: `${props.bgCustomColor}` }"
    >
        <span 
            class="fir-chip__title"
            v-if="props.view === 'double'"
        >
            {{ props.title }}
        </span>
        <span
            class="fir-chip__content"
            :style="{ color: `${props.textCustomColor}` }"
        >
            <slot></slot>
        </span>
    </button>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue';
import type { FirChipProps } from './FirChip.types';

const props = withDefaults(defineProps<FirChipProps>(), {
    title: '',
    type: 'default',
    view: 'filled',
});

const onAction = () => props.onClick && props.onClick();

</script>

<style>
    .fir-chip__wrapper {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        padding: 2px 6px;
        border-radius: var(--fir-chip-border-radius);
        font-size: var(--fir-chip-font-size);
        letter-spacing: 0.24px;
        max-width: 240px;
        overflow: hidden;
        text-overflow: ellipsis;
        border: none;
    }
    .fir-chip__wrapper_clickable {
        cursor: pointer;
    }
    .fir-chip__filled.fir-chip__red {
        border: 1px solid var(--fir-color-state-red-30);
        background-color: var(--fir-color-state-red-30);
        color: var(--fir-color-state-red);
    }
    .fir-chip__filled.fir-chip__yellow {
        border: 1px solid var(--fir-color-state-yellow-30);
        background-color: var(--fir-color-state-yellow-30);
        color: var(--fir-color-state-yellow);
    }
    .fir-chip__filled.fir-chip__green {
        border: 1px solid var(--fir-color-state-green-30);
        background-color: var(--fir-color-state-green-30);
        color: var(--fir-color-state-green);
    }
    .fir-chip__filled.fir-chip__blue {
        border: 1px solid var(--fir-color-state-blue-30);
        background-color: var(--fir-color-state-blue-30);
        color: var(--fir-color-state-blue);
    }
    .fir-chip__filled.fir-chip__gray {
        border: 1px solid var(--fir-color-gray-light-3);
        background-color: var(--fir-color-gray-light-3);
        color: var(--fir-color-gray-dark-3);
    }
    .fir-chip__outlined {
        background-color: transparent;
    }
    .fir-chip__outlined.fir-chip__red {
        border: 1px solid var(--fir-color-state-red);
        color: var(--fir-color-state-red);
    }
    .fir-chip__outlined.fir-chip__yellow {
        border: 1px solid var(--fir-color-state-yellow);
        color: var(--fir-color-state-yellow);
    }
    .fir-chip__outlined.fir-chip__green {
        border: 1px solid var(--fir-color-state-green);
        color: var(--fir-color-state-green);
    }
    .fir-chip__outlined.fir-chip__blue {
        border: 1px solid var(--fir-color-state-blue);
        color: var(--fir-color-state-blue);
    }
    .fir-chip__outlined.fir-chip__gray {
        border: 1px solid var(--fir-color-gray-dark-3);
        color: var(--fir-color-gray-dark-3);
    }
    .fir-chip__double.fir-chip__red {
        border: 1px solid var(--fir-color-state-red);
        color: var(--fir-color-state-red);
    }
    .fir-chip__double.fir-chip__yellow {
        border: 1px solid var(--fir-color-state-yellow);
        color: var(--fir-color-state-yellow);
    }
    .fir-chip__double {
        padding: 0;
        background: transparent;
        line-height: 16px;
        min-height: 22px;
    }
    .fir-chip__double .fir-chip__title {
        display: flex;
        align-items: center;
        min-width: 20px;
        padding: 1px 5px;
        height: 16px;
        line-height: 16px;
    }
    .fir-chip__double .fir-chip__content {
        display: flex;
        align-items: center;
        background-color: transparent;
        padding: 1px 5px 1px 4px;
        color: var(--fir-global-text-color);
    }
    .fir-chip__double.fir-chip__red {
        border: 2px solid var(--fir-color-state-red-30);
    }
    .fir-chip__double.fir-chip__red .fir-chip__title {
        background-color: var(--fir-color-state-red-30);
        color: var(--fir-color-state-red);
    }
    .fir-chip__double.fir-chip__yellow {
        border: 2px solid var(--fir-color-state-yellow-30);
    }
    .fir-chip__double.fir-chip__yellow .fir-chip__title {
        background-color: var(--fir-color-state-yellow-30);
        color: var(--fir-color-state-yellow);
    }
    .fir-chip__double.fir-chip__green {
        border: 2px solid var(--fir-color-state-green-30);
    }
    .fir-chip__double.fir-chip__green .fir-chip__title {
        background-color: var(--fir-color-state-green-30);
        color: var(--fir-color-state-green);
    }
    .fir-chip__double.fir-chip__blue {
        border: 2px solid var(--fir-color-state-blue-30);
    }
    .fir-chip__double.fir-chip__blue .fir-chip__title {
        background-color: var(--fir-color-state-blue-30);
        color: var(--fir-color-state-blue);
    }
    .fir-chip__double.fir-chip__gray {
        border: 2px solid var(--fir-color-gray-light-3);
    }
    .fir-chip__double.fir-chip__gray .fir-chip__title {
        background-color: var(--fir-color-gray-light-3);
        border: 1px solid var(--fir-color-gray-light-3);
        color: var(--fir-color-gray-dark-3);
    }
</style>