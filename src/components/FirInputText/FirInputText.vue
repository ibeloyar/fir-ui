<script setup lang="ts">
import type { FirInputTextProps } from './FirInputText.types';

const props = withDefaults(defineProps<FirInputTextProps>(), {
    error: '',
});

const model = defineModel('value');
</script>

<template>
    <label :class="{
        'fir-input-text__wrapper': true,
        'fir-input-text__disabled': $attrs.disabled,
    }">
        <span v-if="props.label" 
              :class="{
                  'fir-input-text__label': true,
                  'fir-input-text__label_error': props.error,
              }">
            {{ props.label }}
        </span>
        <input
            :class="{
                'fir-input-text__root': true,
                'fir-input-text__root_error': !!props.error,
            }"
            v-bind="$attrs"
            v-model="model"
            type="text"
        />
        <span v-if="props.error" class="fir-input-text__error">{{ props.error }}</span>
    </label>
</template>

<style>
.fir-input-text__wrapper {
    gap: 2px;
    display: flex;
    flex-direction: column;
    color: var(--fir-global-text-color);
    font-family: var(--fir-global-font-family);
}
.fir-input-text__wrapper.fir-input-text__disabled {
    color: var(--fir-global-text-disabled-color);
}
.fir-input-text__label {
    margin-left: 4px;
    font-size: var(--fir-input-text-label-font-size);
}
.fir-input-text__label.fir-input-text__label_error {
    color: var(--fir-global-text-error-color);
}
.fir-input-text__root {
    color: inherit;
    border: var(--fir-input-text-border);
    padding: var(--fir-input-text-padding);
    font-size: var(--fir-input-text-font-size);
    transition: var(--fir-global-duration);
    border-radius: var(--fir-global-border-radius);
}
.fir-input-text__root::placeholder {
    font-size: var(--fir-input-text-ph-font-size);
}
.fir-input-text__root:hover {
    border: var(--fir-input-text-border-hover);
}
.fir-input-text__root:disabled {
    border: var(--fir-input-text-border-disabled);
}
.fir-input-text__root:focus-visible {
    border: var(--fir-input-text-border-focus);
    outline: none;
}
.fir-input-text__root.fir-input-text__root_error {
    border: var(--fir-input-text-border-error);
}
.fir-input-text__error {
    margin-left: 4px;
    color: var(--fir-global-text-error-color);
    font-size: var(--fir-input-text-error-font-size);
}
</style>