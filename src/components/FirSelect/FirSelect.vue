<script setup lang="ts">
import { ref } from 'vue';
import FirPopper from '../FirPopper/FirPopper.vue';
import FirInputText from '../FirInputText/FirInputText.vue';

import type { FirSelectProps } from './FirSelect.types';

const props = withDefaults(defineProps<FirSelectProps>(), {
    value: '',
    error: '',
    label: '',
});

const isListOpen = ref(false);

const onOpenList = () => {
    isListOpen.value = true;
};

const emit = defineEmits(['update:value']);

const onSelectItem = (e) => {
    emit('update:value', e.target.textContent);
    isListOpen.value = false;
};

</script>


<template>
    <label :class="{
        'fir-select__wrapper': true,
        'fir-select__disabled': $attrs.disabled,
    }">
        <span v-if="props.label" 
              :class="{
                  'fir-select__label': true,
                  'fir-select__label_error': props.error,
              }"
        >
            {{ props.label }}
        </span>
        <FirPopper 
            type="click" 
            position="auto" 
            full-width 
            :is-open="isListOpen" 
            @open-list="onOpenList"
        >
            <template v-slot:ancor>    
                <FirInputText 
                    clean
                    ref='input-ref'
                    readonly :value="value"
                    :placeholder="props.placeholder"
                    :error="!isListOpen && props.error"
                />
            </template>
            <template v-slot:content>
                <ul class="fir-select__list" v-if="isListOpen">
                    <li 
                        :key="option"
                        :value="option"
                        @click="onSelectItem" 
                        v-for="option in props.options"
                        class="fir-select__list_option"
                    >
                        {{ option }}
                    </li>
                </ul>
            </template>
        </FirPopper>
        <span v-if="props.error" class="fir-input__error">{{ props.error }}</span>
    </label>
</template>

<style>
.fir-select__wrapper {
    color: var(--fir-global-color);
    font-family: var(--fir-global-font-family);
}
.fir-select__label {
    margin-left: 4px;
    font-size: var(--fir-input-label-font-size);
}
.fir-select__label.fir-select__label_error {
    color: var(--fir-global-text-error-color);
}
.fir-select__root.fir-select__root_error {
    border: var(--fir-input-border-error);
}
.fir-select__error {
    margin-left: 4px;
    color: var(--fir-global-text-error-color);
    font-size: var(--fir-input-error-font-size);
}
.fir-select__list {
    background-color: var(--fir-select-bg-color);
    border: 1px solid var(--fir-global-border-color);
    border-radius: var(--fir-global-border-radius);
    min-width: 80px;
    margin: 0;
    padding: 8px 4px;
    width: 100%;
    box-sizing: border-box;
}
.fir-select__list_option {
    list-style: none;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 4px 0;
    color: var(--fir-global-color);
    font-family: var(--fir-global-font-family);
    font-size: var(--fir-select-options-font-size);
}
.fir-select__list_option:hover {
    background-color: var(--fir-select-active-item-bg-color);
}
</style>
