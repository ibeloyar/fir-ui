<script setup lang="ts">
import { defineProps, ref } from 'vue';
import type { FirAccordionProps } from './FirAccordion.types';

const props = defineProps<FirAccordionProps>();

const isOpen = ref(false);

const onToggle = () => isOpen.value = !isOpen.value;
</script>

<template>
    <div class="fir-accordion__root"> 
        <button 
            :class="{ 'fir-accordion__title': true, 'fir-accordion__title_open': isOpen }"
            @click="onToggle"
        >
            {{ props.title }}
        </button>
        <Transition name="slide-fade">
            <div v-show="isOpen" class="fir-accordion__content">
                <slot></slot>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.fir-accordion__root {
    position: relative;
    font-family: var(--fir-global-font-family);
}
.fir-accordion__title {
    font-size: var(--fir-global-font-size-large);
    padding-left: 20px;
    height: 24px;
    cursor: pointer;
    background: none;
    border: none;
    text-align: start;
}
.fir-accordion__title::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 7px;
    border: solid var(--fir-global-text-color);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transition: .25s;
}
.fir-accordion__title_open.fir-accordion__title::before {
    top: 6px;
    transition: .25s;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
.fir-accordion__content {
    padding: 4px;
}
.slide-fade-enter-active {
    transition: all 0.25s;
}
.slide-fade-leave-active {
    transition: all 0.25s;
}
.slide-fade-enter-from {
    transform: translateY(-10px);
    opacity: 0;
    z-index: 0;
}
.slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
    z-index: -1;
}
</style>