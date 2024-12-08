<script setup lang="ts">
import type { FirCheckboxProps } from './FirCheckbox.types';

const props = defineProps<FirCheckboxProps>();
</script>

<template>
    <input          
        :class="[
            'fir-checkbox__root', 
            `fir-checkbox__${props.size}`
        ]"  type="checkbox" v-bind="$attrs" />
</template>

<style scoped>
.fir-checkbox__root {
    
}
</style>