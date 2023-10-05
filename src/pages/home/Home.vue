<template>
  <v-container>
    <v-row>
      <v-col cols="6" offset="3">
        <v-text-field placeholder="Поиск книги" variant="outlined"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useBookStore } from '@/entities/book'

const bookStore = useBookStore()

const getBooks = async () => {
  await bookStore.fetchBooks()
}

onMounted(async () => {
  await getBooks()
})
</script>
