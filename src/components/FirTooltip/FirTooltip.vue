<script setup lang="ts">
import FirPopper from '../FirPopper/FirPopper.vue';

import type { FirTooltipProps } from './FirTooltip.types';

const props = withDefaults(defineProps<FirTooltipProps>(), {
    text: '',
});

</script>


<template>
    <FirPopper type="default">
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
    background-color: rgba(0, 0, 0, 0.3);
    color: white;
    max-width: 300px;
    min-width: 80px;
    font-size: 12px;
    padding: 4px;
    border-radius: var(--fir-global-border-radius);
}
</style>
