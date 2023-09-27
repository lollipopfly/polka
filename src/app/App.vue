<template>
  <component :is="layout"> <router-view /> </component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { DefaultLayout } from '@/widgets/default-layout/'

const route = useRoute()

// COMPUTED
const layout = computed(() => route.meta.layout || DefaultLayout)
</script>

<style>
@import 'index.css';
</style>
