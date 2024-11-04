<template>
    <button 
        :class="classes" 
        @:click="emit('click', $event)"
    >
        {{ props.label }}
    </button>
</template>

<script lang="ts" setup>
const props = defineProps({
    label: {
        type: String,
    },
    type: {
        type: String,
        required: false,
        default: 'filled',
    }
})

const emit = defineEmits(['click'])

const classes = {
    'fir-button__root': true,
    filled: props.type === 'filled',
}
</script>

<style scoped>
    .fir-button__root {
        transition: var(--fir-global-duration);
    }
    .fir-button__root:hover {
        opacity: 0.8;
    }
    .fir-button__root.filled {
        border: none;
        background:var(--fir-color-primary);
    }
</style>