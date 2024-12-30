<script lang="ts" setup>
import { FirSwitchProps } from './FirSwitch.types';

const props = withDefaults(defineProps<FirSwitchProps>(), {
    value: false,
});

const emits = defineEmits(['update:value']);

const onClick = () => {
    emits('update:value', !props.value);
};
</script>

<template>
    <button
        type="button"
        class="fir-switch__root"
        v-bind="$attrs"
        @click="onClick"
    >
        <div 
            :class="{'fir-switch__point': true, 'fir-switch__point_checked': props.value }"
        />
    </button>
</template>

<style>
.fir-switch__root {
    background: transparent;
    border: 1px solid red;
    border-radius: 24px;
}
.fir-switch__point {

}
.fir-switch__point_checked {

}
</style>