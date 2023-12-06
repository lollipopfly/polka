<template>
  <v-layout :class="[styles.layout, 'rounded', 'rounded-md']" ref="app">
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
import styles from './styles.module.css'
</script>
