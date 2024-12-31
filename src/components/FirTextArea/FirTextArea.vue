<script setup lang="ts">
import type { FirTextAreaProps } from './FirTextArea.types';

const props = withDefaults(defineProps<FirTextAreaProps>(), {
    error: '',
    resize: false,
});

// const model = defineModel('value');
</script>

<template>
    <label :class="{
        'fir-textarea__wrapper': true,
        'fir-textarea__disabled': $attrs.disabled,
    }">
        <span v-if="props.label" 
              :class="{
                  'fir-textarea__label': true,
                  'fir-textarea__label_error': props.error,
              }">
            {{ props.label }}
        </span>
        <textarea
            :class="{
                'fir-textarea__root': true,
                'fir-textarea__root_error': !!props.error,
            }"
            v-bind="$attrs"
            rows="3"
        />
        <span v-if="props.error" class="fir-textarea__error">{{ props.error }}</span>
    </label>
</template>

<style>
.fir-textarea__wrapper {
    gap: 2px;
    display: flex;
    flex-direction: column;
    color: var(--fir-global-color);
    font-family: var(--fir-global-font-family);
}
.fir-textarea__wrapper.fir-textarea__disabled {
    color: var(--fir-global-text-disabled-color);
}
.fir-textarea__disabled .fir-textarea__root::placeholder {
    color: var(--fir-global-text-disabled-color);
}
.fir-textarea__label {
    margin-left: 4px;
    font-size: var(--fir-input-label-font-size);
}
.fir-textarea__label.fir-textarea__label_error {
    color: var(--fir-global-text-error-color);
}
.fir-textarea__root {
    color: inherit;
    resize: vertical;
    min-height: 16px;
    border: var(--fir-input-border);
    padding: var(--fir-input-padding);
    font-size: var(--fir-input-font-size);
    transition: var(--fir-global-duration);
    border-radius: var(--fir-global-border-radius);
}
.fir-textarea__root::placeholder {
    font-size: var(--fir-input-ph-font-size);
}
.fir-textarea__root:hover {
    border: var(--fir-input-border-hover);
}
.fir-textarea__root:disabled {
    border: var(--fir-input-border-disabled);
}
.fir-textarea__root:focus-visible {
    border: var(--fir-input-border-focus);
    outline: none;
}
.fir-textarea__root.fir-textarea__root_error {
    border: var(--fir-input-border-error);
}
.fir-textarea__error {
    margin-left: 4px;
    color: var(--fir-global-text-error-color);
    font-size: var(--fir-input-error-font-size);
}
</style>