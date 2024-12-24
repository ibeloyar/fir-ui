<script setup lang="ts">
import FirPopper from '../FirPopper/FirPopper.vue';
import FirInputText from '../FirInputText/FirInputText.vue';

import type { FirSelectProps } from './FirSelect.types';

withDefaults(defineProps<FirSelectProps>(), {
    value: '',
});

</script>


<template>
    <FirPopper type="click">
        <template v-slot:ancor>    
            <FirInputText readonly/>
        </template>
        <template v-slot:content>
            <ul class="fir-select__list">
                <li class="fir-select__list_option">1</li>
            </ul>
        </template>
    </FirPopper>
</template>

<style>
.fir-select__list {
    background-color: var(--fir-select-bg-color);
    border: 1px solid var(--fir-global-border-color);
    border-radius: var(--fir-global-border-radius);
    width: 300px;
    margin: 0;
    padding: 12px 0px 12px 4px;
    margin-top: 4px;
}
.fir-select__list_option {
    list-style: none;
}
</style>
