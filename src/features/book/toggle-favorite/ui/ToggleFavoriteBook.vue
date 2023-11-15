<template>
  <v-btn prepend-icon="mdi-star" :color="color" @click="bookStore.toggleFavoriteBook(book)">
    {{ text }}
  </v-btn>
</template>

<script setup lang="ts">
import { useBookStore, type IBook } from '@/entities/book'

const props = defineProps<{
  book: IBook
}>()
const bookStore = useBookStore()

// COMPUTED
const text = computed((): string =>
  bookStore.isBookInFavorites(props.book.id) ? 'В избранном' : 'В избранное'
)

const color = computed((): string => (bookStore.isBookInFavorites(props.book.id) ? 'yellow' : ''))
</script>
