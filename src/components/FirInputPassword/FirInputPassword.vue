<script setup lang="ts">
import { ref } from 'vue';

import FirEye from '../../assets/icons/FirEye.vue';
import FirEyeOff from '../../assets/icons/FirEyeOff.vue';

import type { FirInputPasswordProps } from './FirInputPassword.types';

const props = withDefaults(defineProps<FirInputPasswordProps>(), {
    error: '',
});

const model = defineModel('value');

const isHide = ref(true);

const toggleIsHide = () => isHide.value = !isHide.value;
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
        <div class="fir-input-text__input">
            <input
                :class="{
                    'fir-input-text__root': true,
                    'fir-input-text__root_error': !!props.error,
                }"
                v-bind="$attrs"
                v-model="model"
                :type="isHide ? 'password' : 'text'"
            />
            <button :disabled="!!$attrs.disabled" class="fir-input-password__input_eye" @click="toggleIsHide">
                <slot name="show-icon">
                    <FirEye v-show="!isHide" />
                </slot>
                <slot name="hide-icon">
                    <FirEyeOff v-show="isHide" />
                </slot>
            </button>
        </div>
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
.fir-input-text__input {
    position: relative;
    width: 100%;
}
.fir-input-password__input_eye {
    position: absolute;
    right: 8px;
    top: calc(50% - 10px);
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    height: 24px;
    width: 24px;
}
.fir-input-password__input_eye:disabled {
    outline: none;
    path {
        stroke: var(--fir-global-border-color-disabled);
    }
}
.fir-input-password__input_eye:disabled:hover {
    outline: none;
    path {
        stroke: var(--fir-global-border-color-disabled);
    }
}
.fir-input-password__input_eye:focus,
.fir-input-password__input_eye:focus-visible,
.fir-input-password__input_eye:hover {
    outline: none;    
    path {
        stroke: var(--fir-global-border-color-focus);
    }
}
.fir-input-text__root {
    width: 100%;
    color: inherit;
    box-sizing: border-box;
    border: var(--fir-input-text-border);
    padding: var(--fir-input-text-padding);
    font-size: var(--fir-input-text-font-size);
    transition: var(--fir-global-duration);
    border-radius: var(--fir-global-border-radius);
    padding-right: 32px;
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