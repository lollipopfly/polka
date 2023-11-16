<template>
  <v-btn
    prepend-icon="mdi-check-decagram"
    :color="color"
    @click="bookStore.toggleBookshelfBook(book)"
  >
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
  bookStore.isBookInBookshelf(props.book.id) ? 'Прочитано' : 'Прочитать'
)

const color = computed((): string => (bookStore.isBookInBookshelf(props.book.id) ? 'green' : ''))
</script>
