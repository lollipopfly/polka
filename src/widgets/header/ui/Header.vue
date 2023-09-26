<template>
  <v-app-bar>
    <template v-slot:prepend>
      <Logo @click="goToHome" />
    </template>

    <template v-slot:append>
      <ThemeSwitcher />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ThemeSwitcher } from '@/features/theme-switcher/'
import { Logo } from '@/shared/ui/logo/'

const router = useRouter()

// METHODS
const goToHome = () => {
  router.push({ path: '/' })
}
</script>
