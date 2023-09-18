<template>
  <v-app-bar>
    <template v-slot:prepend>
      <Logo />
    </template>

    <template v-slot:append>
      <ThemeSwitcher />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ThemeSwitcher } from '@/features/theme-switcher/'
import { Logo } from '@/shared/ui/logo/'
</script>
