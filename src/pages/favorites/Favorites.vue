<template>
  <v-container>
    <v-row>
      <v-col>
        <h1 class="text-center">Избранное</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="n in 10" :key="n" sm="6" md="3">
        <BookCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { BookCard } from '@/entities/book'
</script>
