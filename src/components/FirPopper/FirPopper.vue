<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue';

import type { FirPopperProps } from './FirPopper.types';

const CONTENT_ID = 'fir-popper__content_id';

const ancor = useTemplateRef('ancor-ref');
const content = useTemplateRef('content-ref');
const wrapper = useTemplateRef('wrapper-ref');

const props = withDefaults(defineProps<FirPopperProps>(), {
    type: 'default',
    position: 'auto',
});

const isOpen = ref(false);

// focus handle
const onAncorFocusIn = () => {
    if (props.type === 'click') return;
    
    isOpen.value = true;

    renderContent();
};

const onAncorFocusOut = () => {
    if (props.type === 'click') return;

    isOpen.value = false;

    removeContentFromBody();
};

// mouse enter/leave handle 
const onAncorMouseEnter = () => {
    if (props.type === 'click') return;
    
    isOpen.value = true;

    renderContent();
};

const onAncorMouseLeave = (e) => {
    if (props.type === 'click') return;

    if (e.toElement.parentElement.id !== CONTENT_ID && e.toElement.id !== CONTENT_ID) {
        isOpen.value = false;
        removeContentFromBody();
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

// click handle
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
    if (ancor.value && content.value) {
        const rectAncor = ancor.value.getBoundingClientRect();
        const rectContent = content.value.getBoundingClientRect();

        let xOffset = 0;
        let yOffset = 0;

        switch (props.position) {
        case 'auto':
            // render priority -> bottom OR top |_ top-start OR top-end
            //                                  |_ bottom-star OR bottom-end, 
            
            yOffset = rectAncor.height;

            // on Y
            if (window.innerHeight < rectAncor.bottom + rectContent.height) {
                yOffset = -content.value.clientHeight;
            }

            // on X
            if (window.innerWidth < rectContent.x + rectContent.width) {
                xOffset = rectAncor.width - rectContent.width;
                break;
            }
            if (rectContent.left < window.screenX) {
                xOffset = 0;
                break;
            }

            break;
        case 'left':
            yOffset = rectAncor.height / 2 - rectContent.height / 2;
            xOffset = -rectContent.width;
            break;
        case 'rigth':
            yOffset = rectAncor.height / 2 - rectContent.height / 2;
            xOffset = rectAncor.width;
            break;
        case 'top':
            yOffset = -(content.value.clientHeight);
            xOffset = rectAncor.width / 2 - rectContent.width / 2;
            break;
        case 'top-end':
            yOffset = -(content.value.clientHeight);
            xOffset = rectAncor.width - rectContent.width;
            break;
        case 'top-start':
            yOffset = -(content.value.clientHeight);
            xOffset = 0;
            break;
        case 'bottom-start':
            yOffset = rectAncor.height;
            xOffset = 0;
            break;
        case 'bottom-end':
            yOffset = rectAncor.height;
            xOffset = rectAncor.width - rectContent.width;
            break;
        case 'bottom':
        default: 
            yOffset = rectAncor.height;
            xOffset = rectAncor.width / 2 - rectContent.width / 2;
        }

        content.value.style.left = rectAncor.x + window.scrollX + xOffset + 'px';
        content.value.style.top = rectAncor.y + window.scrollY + yOffset + 'px';

        window.document.body.style.position = 'relative';
        window.document.body.appendChild(content.value);
    }
};

const removeContentFromBody = () => {
    content.value.style.left = '0px';
    content.value.style.top = ancor.value.clientHeight + 'px';
    wrapper.value.appendChild(content.value);
};

const scrollListener = () => {
    removeContentFromBody();
    if (isOpen.value) {
        renderContent();
    }
};

const resizeListener = () => {
    removeContentFromBody();
    if (isOpen.value) {
        renderContent();
    }
};

onMounted(() => {
    window.addEventListener('scroll', scrollListener);
    window.addEventListener('resize', resizeListener);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollListener);
    window.removeEventListener('resize', resizeListener);
    removeContentFromBody();
});
</script>

<template>
    <div ref="wrapper-ref" class="fir-popper__wrapper">
        <div 
            tabindex="0"
            ref="ancor-ref"
            class="fir-popper__ancor"
            @click="onClick"
            @focus="onAncorFocusIn"
            @focusout="onAncorFocusOut"
            @keypress.enter="onEnterPress"
            @mouseenter="onAncorMouseEnter" 
            @mouseleave="onAncorMouseLeave"
        >
            <slot name="ancor"></slot>
        </div>
        <div
            ref="content-ref"
            :id="CONTENT_ID"
            :class="{'fir-popper__content': true, hidden: !isOpen }"
            @mouseleave="onMouseContentLeave"
        >
            <slot name="content"></slot> 
        </div>
    </div>
</template>

<style>
.fir-popper__wrapper {
    position: relative;
}
.fir-popper__ancor {
    cursor: default;
    display: inline-block;
    margin: 0;
}
.fir-popper__content {
    position: absolute;
    background-color: transparent;
    visibility: visible;
    opacity: 1;
}
.hidden {
    opacity: 0;
    visibility: hidden;
}
</style>
