<template>
  <v-container>
    <v-row>
      <v-col cols="6" offset="3">
        <BookSearch />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { useBookModel } from '@/entities/book'
import { BookSearch } from '@/features/book'

useHead({
  title: 'Polka - Search book'
})

const bookModel = useBookModel()

onBeforeUnmount(() => {
  bookModel.$reset()
})
</script>
