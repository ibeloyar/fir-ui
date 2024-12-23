<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import { FirPopperProps } from './FirPopper.types';

const ANCOR_ID = 'fir-popper__ancor_id';
const CONTENT_ID = 'fir-popper__content_id';

const props = withDefaults(defineProps<FirPopperProps>(), {
    type: 'default'
});

const isOpen = ref(false);

const onMouseEnter = (e) => {
    if (e.toElement.id === ANCOR_ID) {
        openDefault();
    }

    const elem = document.getElementById(CONTENT_ID);
    if (elem) {
        const rect = elem.getBoundingClientRect();

        elem.style.left = rect.x + 'px';
        elem.style.top = rect.y + 'px';

        document.body.style.position = 'relative';
        document.body.appendChild(elem);
    }
};

const onMouseLeave = (e) => {
    if (e.toElement.id === CONTENT_ID ) {
        return;
    }
    closeDefault();
};

const openDefault = () => {
    if (props.type === 'click') return;
    isOpen.value = true;
};

const closeDefault = () => {
    if (props.type === 'click') return;
    isOpen.value = false;
};

const onClick = () => {
    if (props.type === 'default') return;
    isOpen.value = !isOpen.value;
};

onUnmounted(() => {
    const elements = document.body.getElementsByClassName('fir-popper__content');
    const elementsLength = elements.length;

    if (elementsLength > 0) {
        for (let i = 0; i < elementsLength; i++) {
            elements?.[i]?.remove?.();
        }
    }
});
</script>


<template>
    <div class="fir-popper__wrapper" @mouseleave="onMouseLeave">
        <div 
            tabindex="0"
            :id="ANCOR_ID"
            @click="onClick"
            @focus="openDefault"
            @focusout="closeDefault"
            @mouseenter="onMouseEnter"
            class="fir-popper__ancor"
        >
            <slot name="ancor"></slot>
        </div>
        <div
            :id="CONTENT_ID"
            ref="content-ref"
            @mouseleave="onMouseLeave"
            :class="{ 'fir-popper__content': true, 'hidden': !isOpen }"
        >
            <slot name="content"></slot> 
        </div>
    </div>
</template>

<style>
.fir-popper__wrapper {
    display: inline;
}
.fir-popper__ancor {
    padding: 4px;
    cursor: default;
    display: block;
}
.fir-popper__content {
    position: absolute;
    background-color: transparent;
    visibility: visible;
    transition: 0.2s;
    opacity: 1;
}
.hidden {
    opacity: 0;
    visibility: hidden;
}
</style>
