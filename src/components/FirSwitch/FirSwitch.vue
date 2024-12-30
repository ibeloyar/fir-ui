<script lang="ts" setup>
import { ref } from 'vue';
import { FirSwitchProps } from './FirSwitch.types';

const props = withDefaults(defineProps<FirSwitchProps>(), {
    value: false,
    label: '',
    disabled: false,
});

const state = ref(props.value);

const emits = defineEmits(['update:value']);

const onClick = () => {
    state.value = !state.value;
    emits('update:value', !props.value);
};
</script>

<template>
    <label class="fir-switch__wrapper">
        <button
            type="button"
            @click="onClick"
            :class="{
                'fir-switch__root': true, 
                'fir-switch__root_checked': state,
                'fir-switch__wrapper_disabled': $attrs.disabled,
            }"
            v-bind="$attrs"
        >
            <div 
                :class="{
                    'fir-switch__point': true, 
                    'fir-switch__point_checked': state, 
                    'fir-switch__point_disabled': $attrs.disabled,
                }"
            />
        </button>
        <span 
            v-if="!!props.label" 
            :class="{ 
                'fir-switch__label': true,
                'fir-switch__label_disabled': $attrs.disabled,
            }">{{ props.label }}</span>
    </label>
</template>

<style>
.fir-switch__wrapper {
    display: flex;
    align-items: center;
    font-family: var(--fir-global-font-family);
    font-size: var(--fir-global-font-size-medium);
}
.fir-switch__root {
    position: relative;
    background: transparent;
    border: 1px solid var(--fir-switch-border-color);
    border-radius: 24px;
    height: 18px;
    width: 36px;
    padding: 1px;
    background-color: var(--fir-switch-bg-color);
    cursor: pointer;
}
.fir-switch__root.fir-switch__wrapper_disabled,
.fir-switch__root.fir-switch__wrapper_disabled:hover {
    border: 1px solid var(--fir-switch-border-disabled-color);
    cursor: default;
}
.fir-switch__root:hover {
    border: 1px solid var(--fir-switch-border-hover-color);
}
.fir-switch__root:focus {
    border: 1px solid var(--fir-switch-border-focus-color);
}
.fir-switch__root:focus-visible {
    outline: none;
    border: 1px solid var(--fir-switch-border-focus-color);
}
.fir-switch__point {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 16px;
    width: 16px;
    background-color: var(--fir-switch-color);
    border-radius: 50%;
    transition: var(--fir-global-duration);
}
.fir-switch__point_checked {
    left: 18px;
    background-color: var(--fir-switch-color-checked);
}
.fir-switch__point.fir-switch__point_disabled {
    background-color: var(--fir-switch-color-disabled);
}
.fir-switch__label {
    margin-left: 4px;
    cursor: pointer;
}
.fir-switch__label.fir-switch__label_disabled {
    color: var(--fir-switch-label-disabled-color);
    cursor: default;
}
</style>