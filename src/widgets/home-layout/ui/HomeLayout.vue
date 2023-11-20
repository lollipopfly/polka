<template>
  <v-layout class="rounded rounded-md" ref="app" style="height: 100vh">
    <Header />

    <Navigation />

    <v-main class="d-flex align-center justify-center" fill-height>
      <slot />
    </v-main>

    <Footer />
  </v-layout>
</template>

<script setup lang="ts">
import { Header } from '@/widgets/header'
import { Navigation } from '@/widgets/navigation'
import { Footer } from '@/shared/ui/footer'
</script>
