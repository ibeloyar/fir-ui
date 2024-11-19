<template>
    <label :class="{
        'fir-input__wrapper': true,
        'fir-input__disabled': $attrs.disabled,
    }">
        <span v-if="props.label" 
              :class="{
                  'fir-input__label': true,
                  'fir-input__label_error': props.error,
              }">
            {{ props.label }}
        </span>
        <input
            :class="{
                'fir-input__root': true,
                'fir-input__root_error': !!props.error,
            }"
            v-model="model"
            v-bind="$attrs"
        />
        <span v-if="props.error" class="fir-input__error">{{ props.error }}</span>
    </label>
</template>

<script setup lang="ts">
import type { FirInputProps } from './FirInput.types';

const props = withDefaults(defineProps<FirInputProps>(), {
    error: '',
});

const model = defineModel('value');
</script>

<style>
    .fir-input__wrapper {
        display: flex;
        flex-direction: column;
        gap: 2px;

        color: var(--fir-global-text-color);
    }
    .fir-input__wrapper.fir-input__disabled {
        color: var(--fir-global-text-disabled-color);
    }
    .fir-input__label {
        margin-left: 4px;
        font-size: var(--fir-input-label-font-size);
    }
    .fir-input__label.fir-input__label_error {
        color: var(--fir-global-text-error-color);
    }
    .fir-input__root {
        border: var(--fir-input-border);
        border-radius: var(--fir-global-border-radius);
        padding: var(--fir-input-padding);
        transition: var(--fir-global-duration);
        color: inherit;
        font-size: var(--fir-input-font-size);
    }
    .fir-input__root::placeholder {
        font-size: var(--fir-input-ph-font-size);
    }
    .fir-input__root:hover {
        border: var(--fir-input-border-hover);
    }
    .fir-input__root:disabled {
        border: var(--fir-input-border-disabled);
    }
    .fir-input__root:focus-visible {
        border: var(--fir-input-border-focus);
        outline: none;
    }
    .fir-input__root.fir-input__root_error {
        border: var(--fir-input-border-error);
    }
    .fir-input__error {
        margin-left: 4px;
        color: var(--fir-global-text-error-color);
        font-size: var(--fir-input-error-font-size);
    }
</style>