<script setup lang="ts">
import type { FirModalProps } from './FirModal.types';

const props = defineProps<FirModalProps>();

const onOutsideClick = (e: MouseEvent) => {
    if (e.eventPhase === 3) return; // TODO: magic number
    props.onClose();
};
</script>

<template>
    <div
        tabindex="0"
        class="fir-modal__wrapper" 
        v-show="props.open" 
        @click.stop.prevent="onOutsideClick"
        @keyup.esc="props.onClose"
    >
        <Transition name="bounce">
            <div v-show="props.open" class="fir-modal__root">
                <slot></slot>
            </div>
        </Transition>
    </div>
</template>

<style>
.fir-modal__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--fir-modal-wrapper-bg-color);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.fir-modal__root {
    background-color: var(--fir-modal-bg-color);
    padding: var(--fir-modal-padding);
    border-radius: var(--fir-modal-border-radius);
}
.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}
</style>