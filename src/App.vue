<script setup lang="ts">
import Button from './components/Button.vue'

const label = "Hello";
const ckick = (v: any) => console.log(v);
</script>

<template>
  <Button :label @click="ckick" type="filled"/>
</template>

<style scoped>

</style>
