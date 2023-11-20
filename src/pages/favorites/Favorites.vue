<template>
  <v-container>
    <v-row>
      <v-col sm="10" lg="10" offset-lg="1" offset-sm="1">
        <v-row>
          <v-col>
            <h1 class="text-center">Избранное</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="book in bookStore.favorites"
            :key="String(book.id)"
            xs="6"
            sm="4"
            md="4"
            lg="3"
          >
            <BookCard :data="book" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { BookCard, useBookStore } from '@/entities/book'

const bookStore = useBookStore()
</script>
