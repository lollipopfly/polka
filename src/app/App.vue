<template>
  <component :is="layout"> <router-view /> </component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { DefaultLayout } from '@/shared/ui/default-layout/'

const route = useRoute()

const layout = computed(() => route.meta.layout || DefaultLayout)
</script>

<style>
@import 'index.css';
</style>
