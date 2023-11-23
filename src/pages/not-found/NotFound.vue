<template>
  <h2>{{ title }}</h2>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'

const title = computed((): string => '404 - страница не найдена')

useHead({
  title: title.value
})
</script>
