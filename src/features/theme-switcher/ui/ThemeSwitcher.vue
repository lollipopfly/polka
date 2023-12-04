<template>
  <v-btn
    v-if="currentTheme === THEME.light"
    icon="mdi-white-balance-sunny"
    @click="themeLib.toggleTheme(myTheme, THEME.dark)"
  />
  <v-btn
    icon="mdi-moon-waxing-crescent"
    v-else
    @click="themeLib.toggleTheme(myTheme, THEME.light)"
  />
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'
import { themeLib } from '@/entities/theme'
import { THEME } from '@/shared/config'

const myTheme = useTheme()

const currentTheme = computed((): any => myTheme.global.name.value)
</script>
