<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue';

import type { FirPopperProps } from './FirPopper.types';

const ANCOR_ID = 'fir-popper__ancor_id';
const WRAPPER_ID = 'fir-popper__wrapper_id';
const CONTENT_ID = 'fir-popper__content_id';

const ancor = useTemplateRef('ancor-ref');
const content = useTemplateRef('content-ref');
const wrapper = useTemplateRef('wrapper-ref');

const props = withDefaults(defineProps<FirPopperProps>(), {
    type: 'default',
});

const isOpen = ref(false);
const contentWidth = ref(null);

// FOCUS
const onAncorFocusIn = () => {
    if (props.type === 'click') return;
    
    isOpen.value = true;
};

const onAncorFocusOut = () => {
    if (props.type === 'click') return;

    isOpen.value = false;
};

// MOUSE ENTER/LEAVE
const onAncorMouseEnter = () => {
    if (props.type === 'click') return;
    
    isOpen.value = true;

    renderContent();
};

const onAncorMouseLeave = (e) => {
    if (props.type === 'click') return;

    if (e.toElement.parentElement.id !== CONTENT_ID && e.toElement.id !== CONTENT_ID) {
        isOpen.value = false;
    } 
};

const onMouseContentLeave = (e) => {
    if (props.type === 'click') return;

    if (!e.toElement) return;

    if (e.toElement.id === CONTENT_ID ) {
        return;
    }

    isOpen.value = false;
    removeContentFromBody();
};

// CLICK
const onClick = () => {
    if (props.type === 'default') return;
    if (!isOpen.value) {
        isOpen.value = true;
        renderContent();
    } else {
        isOpen.value = false;
        removeContentFromBody();
    }
};


const onEnterPress = () => {
    if (props.type === 'default') return;
    if (!isOpen.value) {
        isOpen.value = true;
        renderContent();
    } else {
        isOpen.value = false;
        removeContentFromBody();
    }
};

const renderContent = () => {
    contentWidth.value = ancor.value.clientWidth - 18;

    if (ancor.value && content.value) {
        const rect = ancor.value.getBoundingClientRect();

        content.value.style.left = rect.x + window.scrollX + 'px';
        content.value.style.top = rect.y + window.scrollY + rect.height + 'px';

        document.body.style.position = 'relative';
        document.body.appendChild(content.value);
    }
};

const removeContentFromBody = () => {
    wrapper.value.appendChild(content.value);
};

onMounted(() => {
    contentWidth.value = ancor.value.clientWidth - 10;
});

onBeforeUnmount(() => {
    removeContentFromBody();
});
</script>

<template>
    <div class="fir-popper__wrapper" :id="WRAPPER_ID" ref="wrapper-ref">
        <div 
            class="fir-popper__ancor"
            tabindex="0"
            ref="ancor-ref"
            :id="ANCOR_ID"
            @click="onClick"
            @focus="onAncorFocusIn"
            @focusout="onAncorFocusOut"
            @mouseenter="onAncorMouseEnter" 
            @mouseleave="onAncorMouseLeave"
            @keypress.enter="onEnterPress"
        >
            <slot name="ancor"></slot>
        </div>
        <div
            ref="content-ref"
            class="fir-popper__content"
            v-show="isOpen"
            :id="CONTENT_ID"
            :style="{ width: contentWidth + 'px' }"
            @mouseleave="onMouseContentLeave"
        >
            <slot name="content"></slot> 
        </div>
    </div>
</template>

<style>
.fir-popper__wrapper {
    width: 100%;
}
.fir-popper__ancor {
    padding: 4px;
    cursor: default;
    display: inline-block;
    margin: 0;
    padding: 4px;
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
