<template>
  <v-col v-for="book in books" :key="String(book.id)" cols="12" sm="4" md="4" lg="3">
    <BookCard :data="book" />
  </v-col>
</template>

<script setup lang="ts">
import { Card as BookCard, type IBook } from '@/entities/book'

defineProps<{
  books: IBook[]
}>()
</script>
