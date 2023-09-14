<template>
  <v-footer :app="true" border>
    <v-row justify="center" no-gutters>
      <v-col class="text-center" cols="12">
        <p>
          © {{ initYear }}
          <span v-if="currentYear > initYear"> - {{ currentYear }}</span>
          Polka
        </p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup lang="ts">
const initYear = ref(2023)
const currentYear = ref(new Date().getFullYear())
</script>
