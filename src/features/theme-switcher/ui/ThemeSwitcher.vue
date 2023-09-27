<template>
  <v-btn
    v-if="currentTheme === 'light'"
    icon="mdi-white-balance-sunny"
    @click="themeLib.toggleTheme(myTheme, 'dark')"
  />
  <v-btn icon="mdi-moon-waxing-crescent" v-else @click="themeLib.toggleTheme(myTheme, 'light')" />
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { themeLib } from '@/entities/theme/'

const myTheme = useTheme()

// COMPUTED
const currentTheme = computed((): any => myTheme.global.name.value)
</script>
