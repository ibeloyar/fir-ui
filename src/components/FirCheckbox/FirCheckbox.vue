<script setup lang="ts">
import type { FirCheckboxProps } from './FirCheckbox.types';

const props = defineProps<FirCheckboxProps>();

const model = defineModel();
</script>

<template>
    <label class="fir-checkbox__wrapper">
        <input
            v-bind="$attrs" 
            :class="[
                'fir-checkbox__root',
            ]"  
            type="checkbox" 
            v-model="model"
        />
        <span 
            v-if="props.label" 
            :class="[
                'fir-checkbox__label',
                { 'fir-checkbox__label_disabled': $attrs.disabled }
            ]"
        >
            {{ props.label }}
        </span>
        <span v-if="props.tooltip">{{ props.tooltip }}</span>
        <span v-if="props.error">{{ props.error }}</span>
    </label>
</template>

<style>
.fir-checkbox__wrapper {
    position: relative;
}
.fir-checkbox__root {
    height: 0;
    width: 0;
    opacity: 1;
    margin: 0;
}
.fir-checkbox__root::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: var(--fir-checkbox-border);
    cursor: pointer;
}
.fir-checkbox__root:checked::before {
    background-color: var(--fir-color-primary);
}
.fir-checkbox__root:disabled::before {
    border-color: var(--fir-checkbox-border-color-disabled);
    cursor: default;
}
.fir-checkbox__root:disabled:checked::before {
    border-color: var(--fir-checkbox-bg-color-disabled);
    background-color: var(--fir-checkbox-bg-color-disabled);
}
.fir-checkbox__root:checked::after {
    content: '';
    left: 6px;
    top: 2px;
    position: absolute;
    width: 4px;
    height: 8px;
    border: solid var(--fir-global-text-color);
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    cursor: pointer;
}
.fir-checkbox__root:disabled:checked::after {
    border-color: var(--fir-checkbox-border-color-disabled);
    cursor: default;
}
.fir-checkbox__label {
    padding-left: 24px;
    color: var(--fir-global-text-color);
    cursor: pointer;
}
.fir-checkbox__label.fir-checkbox__label_disabled {
    color: var(--fir-global-text-disabled-color);
    cursor: default;
}
</style>