<script setup lang="ts">
import FirPopper from '../FirPopper/FirPopper.vue';

import type { FirTooltipProps } from './FirTooltip.types';

const props = withDefaults(defineProps<FirTooltipProps>(), {
    text: '',
    popperPosition: 'bottom',
});

</script>


<template>
    <FirPopper type="default" :position="props.popperPosition">
        <template v-slot:ancor>
            <slot></slot>
        </template>
        <template v-slot:content>
            <div class="fir-tooltip__text">
                {{ props.text }}
            </div>
        </template>
    </FirPopper>
</template>

<style>
.fir-tooltip__text {
    font-family: var(--fir-global-font-family);
    background-color: var(--fir-c-transparent-dark);
    color: var(--fir-global-reverse-text-color);
    max-width: var(--fir-tooltip-max-width);
    min-width: var(--fir-tooltip-min-width);
    font-size: var(--fir-tooltip-font-size);
    padding: 4px;
    border-radius: var(--fir-global-border-radius);
    white-space: pre-line;
}
</style>
