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
                `fir-checkbox__${props.size}`
            ]"  
            type="checkbox" 
            v-model="model"
        />
        <span :class="[
            'fir-checkbox__label', 
            `fir-checkbox__label_${props.size}`
        ]"  v-if="props.label">{{ props.label }}</span>
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
}
.fir-checkbox__root::before {
    content: '';
    border: 1px solid var(--fir-color-primary);
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    cursor: pointer;
}
.fir-checkbox__root::after {
    content: '';
    left: 5px;
    top: 2px;
    position: absolute;
    width: 4px;
    height: 8px;
    border: solid red;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
.fir-checkbox__label {
    color: var(--fir-global-text-color);
}
.fir-checkbox__label.fir-checkbox__label_medium {
    margin-left: 16px;
}
</style>