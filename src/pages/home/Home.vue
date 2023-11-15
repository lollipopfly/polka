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
import { useBookStore } from '@/entities/book'
import { BookSearch } from '@/features/book'

const bookStore = useBookStore()

onBeforeUnmount(() => {
  bookStore.$reset()
})
</script>
