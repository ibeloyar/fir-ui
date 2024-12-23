<script setup lang="ts">
import FirPopper from '../FirPopper/FirPopper.vue';
import FirInputText from '../FirInputText/FirInputText.vue';

import type { FirSelectProps } from './FirSelect.types';

const props = withDefaults(defineProps<FirSelectProps>(), {
    value: '',
});

console.log(props);
</script>


<template>
    <FirPopper type="default">
        <template v-slot:ancor>    
            <FirInputText readonly/>
        </template>
        <template v-slot:content>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </template>
    </FirPopper>
</template>

<style>

</style>
