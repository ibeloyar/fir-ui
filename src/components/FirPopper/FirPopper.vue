<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import { FirPopperProps } from './FirPopper.types';

const ANCOR_ID = 'fir-popper__ancor_id';
const WRAPPER_ID = 'fir-popper__wrapper_id';
const CONTENT_ID = 'fir-popper__content_id';

const props = withDefaults(defineProps<FirPopperProps>(), {
    type: 'default'
});

const isOpen = ref(false);

const onMouseEnter = (e) => {
    if (props.type === 'click') return;

    if (e.toElement.id === ANCOR_ID) {
        openDefault();
    }

    renderContent();
};

const onMouseLeave = (e) => {
    if (props.type === 'click') return;
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

    if (!isOpen.value) {
        isOpen.value = true;
        renderContent();
    } else {
        isOpen.value = false;
        removeContentFromBody();
    }
};

const ancor = useTemplateRef('ancor-ref');
const content = useTemplateRef('content-ref');
const wrapper = useTemplateRef('wrapper-ref');

const renderContent = () => {
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

// onUnmounted(() => {
//     const elements = document.body.getElementsByClassName('fir-popper__content');
//     const elementsLength = elements.length;

//     if (elementsLength > 0) {
//         for (let i = 0; i < elementsLength; i++) {
//             elements?.[i]?.remove?.();
//         }
//     }
// });
</script>


<template>
    <div class="fir-popper__wrapper" @mouseleave="onMouseLeave" :id="WRAPPER_ID" ref="wrapper-ref">
        <div 
            tabindex="0"
            :id="ANCOR_ID"
            @click="onClick"
            @focus="openDefault"
            @focusout="closeDefault"
            @mouseenter="onMouseEnter"
            class="fir-popper__ancor"
            ref="ancor-ref"
        >
            <slot name="ancor"></slot>
        </div>
        <div
            :id="CONTENT_ID"
            @mouseleave="onMouseLeave"
            v-show="isOpen"
            :class="{ 'fir-popper__content': true }"
            ref="content-ref"
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
    margin: 0;
    padding: 0;
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
