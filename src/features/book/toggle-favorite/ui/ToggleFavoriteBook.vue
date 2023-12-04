<template>
  <v-btn prepend-icon="mdi-star" :color="color" @click="bookModel.toggleFavoriteBook(book)">
    {{ text }}
  </v-btn>
</template>

<script setup lang="ts">
import { useBookModel, type IBook } from '@/entities/book'

const props = defineProps<{
  book: IBook
}>()
const bookModel = useBookModel()

const text = computed((): string =>
  bookModel.isBookInFavorites(props.book.id) ? 'In favorites' : 'To favorites'
)

const color = computed((): string => (bookModel.isBookInFavorites(props.book.id) ? 'yellow' : ''))
</script>
