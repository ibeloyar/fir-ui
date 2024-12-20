<script setup lang="ts">
import { defineProps } from 'vue';
import type { FirBreadcrumbsProps } from './FirBreadcrumbs.types';

const props = defineProps<FirBreadcrumbsProps>();
</script>

<template>
    <div class="fir-breadcrumbs"> 
        <span 
            class="fir-breadcrumbs__item"
            v-for="item in props.list" 
            :key="item.name"
            @click="item.onClick"
        >
            <span class="fir-breadcrumbs__slash">/</span>
            <span 
                :class="{
                    'fir-breadcrumbs__text': true, 
                    'fir-breadcrumbs__text_active': !!item.onClick 
                }"
            >
                {{ item.name }}
            </span>
        </span>
    </div>
</template>

<style scoped>
.fir-breadcrumbs {
    display: flex;
    align-items: center;
    font-family: var(--fir-global-font-family);
    font-size: var(--fir-global-font-size-medium);
    color: var(--fir-global-text-disabled-color);
}
.fir-breadcrumbs__item {
    display: flex;
    align-items: center;
    margin-left: 2px;
}
.fir-breadcrumbs__text {    
    display: inline-block;
    max-width: 240px;
    text-overflow: ellipsis;
    overflow: hidden;
}
.fir-breadcrumbs__text_active.fir-breadcrumbs__text {
    color: var(--fir-global-text-color);
    cursor: pointer;
}
.fir-breadcrumbs__slash {
    color: var(--fir-global-text-disabled-color);
    margin-right: 4px;
}
.fir-breadcrumbs__text_active:hover {
    color: var(--fir-color-primary);
}
</style>