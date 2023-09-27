<template>
  <v-layout class="rounded rounded-md" ref="app">
    <Header />

    <Navigation :show="themeStore.isShowNav" />

    <v-main>
      <slot />
    </v-main>

    <Footer />
  </v-layout>
</template>

<script setup lang="ts">
import { Header } from '@/widgets/header'
import { useThemeStore } from '@/entities/theme'
import { Navigation } from '@/shared/ui/navigation'
import { Footer } from '@/shared/ui/footer'

const themeStore = useThemeStore()
</script>
