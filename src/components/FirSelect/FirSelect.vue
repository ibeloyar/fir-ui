<script setup lang="ts">
import FirPopper from '../FirPopper/FirPopper.vue';
import FirInputText from '../FirInputText/FirInputText.vue';

import type { FirSelectProps } from './FirSelect.types';
import { ref } from 'vue';

withDefaults(defineProps<FirSelectProps>(), {
    value: '',
});


const onSelectItem = (value: any) => {
    console.log(value);
};
</script>


<template>
    <FirPopper type="click">
        <template v-slot:ancor>    
            <FirInputText ref='input-ref' readonly/>
        </template>
        <template v-slot:content>
            <ul class="fir-select__list">
                <li @click="onSelectItem" class="fir-select__list_option">123</li>
            </ul>
        </template>
    </FirPopper>
</template>

<style>
.fir-select__list {
    background-color: var(--fir-select-bg-color);
    border: 1px solid var(--fir-global-border-color);
    border-radius: var(--fir-global-border-radius);
    min-width: 80px;
    margin: 0;
    padding: 8px 4px;
    margin-top: 4px;
    width: 100%;
}
.fir-select__list_option {
    list-style: none;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 4px 0;
}
.fir-select__list_option:hover {
    background-color: lightblue;
}
</style>
