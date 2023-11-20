<template>
  <v-layout class="rounded rounded-md" ref="app">
    <Header />

    <Navigation />

    <v-main>
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
