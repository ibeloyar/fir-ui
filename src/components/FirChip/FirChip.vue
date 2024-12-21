
<script setup lang="ts">
import { reactive, withDefaults } from 'vue';
import type { FirChipProps } from './FirChip.types';

const props = withDefaults(defineProps<FirChipProps>(), {
    type: 'default',
    view: 'filled',
});

const emits = defineEmits(['click']);

const wrapperStyles = reactive({ backgroundColor: undefined, border: undefined });
if (props.view === 'filled' && props.bgCustomColor) {
    wrapperStyles.backgroundColor = `${props.bgCustomColor}`;
}
if (props.view === 'outlined' && props.bgCustomColor) {
    wrapperStyles.border = `1px solid ${props.bgCustomColor}`;
}
if (props.view === 'double' && props.bgCustomColor) {
    wrapperStyles.border = `2px solid ${props.bgCustomColor}`;
}

const titleStyles = reactive({ color: undefined, backgroundColor: undefined, border: undefined });
if (props.view === 'double' && props.bgCustomColor && props.titleCustomColor) {
    titleStyles.backgroundColor = `${props.bgCustomColor}`;
    titleStyles.color = `${props.titleCustomColor}`;
}

</script>

<template>
    <button :class="{
                'fir-chip__wrapper': true, 
                [`fir-chip__${props.color}`]: true,
                [`fir-chip__${props.view}`]: true,
                ['fir-chip__wrapper_clickable']: !!props.onClick,
            }"
            @click="emits('click')"
            @keyup.prevent
            :style="wrapperStyles"
    >
        <span 
            class="fir-chip__title"
            v-if="props.view === 'double'"
            :style="titleStyles"
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

<style>
.fir-chip__wrapper {
    font-family: var(--fir-global-font-family);
    font-size: var(--fir-chip-font-size);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 2px 6px;
    border-radius: var(--fir-chip-border-radius);
    max-width: 240px;
    overflow: hidden;
    text-overflow: ellipsis;
    border: none;
    height: 24px;
}
.fir-chip__content {
    line-height: 16px;
}
.fir-chip__wrapper_clickable {
    cursor: pointer;
}
.fir-chip__filled.fir-chip__red {
    border: 1px solid var(--fir-c-red-30);
    background-color: var(--fir-c-red-30);
    color: var(--fir-c-red);
}
.fir-chip__filled.fir-chip__yellow {
    border: 1px solid var(--fir-c-yellow-30);
    background-color: var(--fir-c-yellow-30);
    color: var(--fir-c-yellow);
}
.fir-chip__filled.fir-chip__green {
    border: 1px solid var(--fir-c-green-30);
    background-color: var(--fir-c-green-30);
    color: var(--fir-c-green);
}
.fir-chip__filled.fir-chip__blue {
    border: 1px solid var(--fir-c-blue-30);
    background-color: var(--fir-c-blue-30);
    color: var(--fir-c-blue);
}
.fir-chip__filled.fir-chip__gray {
    border: 1px solid var(--fir-c-gray-light-3);
    background-color: var(--fir-c-gray-light-3);
    color: var(--fir-c-gray-dark-3);
}
.fir-chip__outlined {
    background-color: transparent;
}
.fir-chip__outlined.fir-chip__red {
    border: 1px solid var(--fir-c-red);
    color: var(--fir-c-red);
}
.fir-chip__outlined.fir-chip__yellow {
    border: 1px solid var(--fir-c-yellow);
    color: var(--fir-c-yellow);
}
.fir-chip__outlined.fir-chip__green {
    border: 1px solid var(--fir-c-green);
    color: var(--fir-c-green);
}
.fir-chip__outlined.fir-chip__blue {
    border: 1px solid var(--fir-c-blue);
    color: var(--fir-c-blue);
}
.fir-chip__outlined.fir-chip__gray {
    border: 1px solid var(--fir-c-gray-dark-3);
    color: var(--fir-c-gray-dark-3);
}
.fir-chip__double.fir-chip__red {
    border: 1px solid var(--fir-c-red);
    color: var(--fir-c-red);
}
.fir-chip__double.fir-chip__yellow {
    border: 1px solid var(--fir-c-yellow);
    color: var(--fir-c-yellow);
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
    height: 24px;
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
    border: 2px solid var(--fir-c-red-30);
}
.fir-chip__double.fir-chip__red .fir-chip__title {
    background-color: var(--fir-c-red-30);
    color: var(--fir-c-red);
}
.fir-chip__double.fir-chip__yellow {
    border: 2px solid var(--fir-c-yellow-30);
}
.fir-chip__double.fir-chip__yellow .fir-chip__title {
    background-color: var(--fir-c-yellow-30);
    color: var(--fir-c-yellow);
}
.fir-chip__double.fir-chip__green {
    border: 2px solid var(--fir-c-green-30);
}
.fir-chip__double.fir-chip__green .fir-chip__title {
    background-color: var(--fir-c-green-30);
    color: var(--fir-c-green);
}
.fir-chip__double.fir-chip__blue {
    border: 2px solid var(--fir-c-blue-30);
}
.fir-chip__double.fir-chip__blue .fir-chip__title {
    background-color: var(--fir-c-blue-30);
    color: var(--fir-c-blue);
}
.fir-chip__double.fir-chip__gray {
    border: 2px solid var(--fir-c-gray-light-3);
}
.fir-chip__double.fir-chip__gray .fir-chip__title {
    background-color: var(--fir-c-gray-light-3);
    border: 1px solid var(--fir-c-gray-light-3);
    color: var(--fir-c-gray-dark-3);
}
</style>