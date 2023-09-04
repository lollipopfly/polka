<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-layout class="rounded rounded-md" ref="app" style="height: 100vh">
    <v-app-bar title="Polka"></v-app-bar>

    <v-main class="d-flex align-center justify-center" fill-height>
      <RouterView />
    </v-main>

    <v-footer :app="true" border>
      <v-row justify="center" no-gutters>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Polka</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-layout>
</template>
