<template>
    <input
        :class="{
            'fir-input__root': true,
            'fir-input__root_error': !!props.error,
        }"
        v-model="model"
        v-bind="$attrs"
    />
    <span v-if="props.error" class="fir-input__error">{{ props.error }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
    error: {
        type: String,
        required: false,
    },
})
const model = defineModel('value')
</script>

<style>
    .fir-input__root {
        border: var(--fir-input-border);
        border-radius: var(--fir-global-border-radius);
        padding: var(--fir-input-padding);
        transition: var(--fir-global-duration);
    }
    .fir-input__root:hover {
        border: var(--fir-input-border-hover);
    }
    .fir-input__root:focus-visible {
        border: var(--fir-input-border-focus);
        outline: none;
    }
    .fir-input__root.fir-input__root_error {
        border-color: var(--fir-input-error-color);
    }
    .fir-input__error {
        margin-left: 4px;
        color: var(--fir-input-error-color);
        font-size: var(--fir-input-error-font-size);
    }
</style>