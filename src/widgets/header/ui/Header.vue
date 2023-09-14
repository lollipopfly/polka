<template>
  <v-app-bar title="Polka">
    <template v-slot:append>
      <ThemeSwitcher />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ThemeSwitcher } from '@/features/theme-switcher/'
</script>
