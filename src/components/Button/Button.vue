<template>
    <button 
        :class="['fir-button__root', props.type, props.size]" 
        @:click="emit('click', $event)"
    >
        {{ props.label }}
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
    },
    type: {
        type: String,
        required: false,
        default: 'filled', // 'filled', 'outline', 'clear'
    },
    size: {
        type: String,
        required: false,
        default: 'medium', // 'small', 'medium', 'large'
    }
})

const emit = defineEmits(['click'])

</script>

<style scoped>
    .fir-button__root {
        transition: var(--fir-global-duration);
        border-radius: var(--fir-global-border-radius);
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