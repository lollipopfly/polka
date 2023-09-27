<template>
  <v-app-bar>
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        variant="text"
        @click.stop="themeStore.toggleIsShowNav"
      ></v-app-bar-nav-icon>
      <Logo @click="goToHome" />
    </template>

    <template v-slot:append>
      <ThemeSwitcher />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/entities/theme'
import { ThemeSwitcher } from '@/features/theme-switcher/'
import { Logo } from '@/shared/ui/logo/'

const router = useRouter()
const themeStore = useThemeStore()

// METHODS
const goToHome = () => {
  router.push({ path: '/' })
}
</script>
