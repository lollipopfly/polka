<template>
  <v-layout class="rounded rounded-md" ref="app" style="height: 100vh">
    <Header />

    <v-main class="d-flex align-center justify-center" fill-height>
      <RouterView />
    </v-main>

    <Footer />
  </v-layout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Header } from '@/widgets/header/index'
import { Footer } from '@/shared/ui/footer/index'
</script>

<style>
@import 'index.css';
</style>
