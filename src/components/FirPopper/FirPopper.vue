<script setup lang="ts">
import { ref } from 'vue';
import { FirPopperProps } from './FirPopper.types';

const props = withDefaults(defineProps<FirPopperProps>(), {
    type: 'default'
})

const isOpen = ref(false)

const openDefault = () => {
    if (props.type === 'click') return;
    isOpen.value = true
}

const closeDefault = () => {
    if (props.type === 'click') return;
    isOpen.value = false
}

const onClick = () => {
    if (props.type === 'default') return;
    isOpen.value = !isOpen.value
}

</script>

<template>
<div>
    <div 
        @click="onClick"
        @focus="openDefault"
        @focusout="closeDefault"
        @mouseenter="openDefault"
        @mouseleave="closeDefault"
        tabindex="0"
    >
        <slot name="ancor"></slot>
    </div>
    <div v-show="isOpen">
       <slot name="content"></slot> 
    </div>
</div>
</template>
