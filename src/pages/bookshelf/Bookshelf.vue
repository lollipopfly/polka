<template>
  <v-container v-if="isShowBookshelf">
    <v-row>
      <v-col sm="10" lg="10" offset-lg="1" offset-sm="1">
        <v-row>
          <v-col>
            <h1 class="text-center">Прочитанное</h1>
          </v-col>
        </v-row>
        <v-row>
          <BookList :books="bookModel.bookshelf" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>

  <EmptyText v-else />
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { BookList } from '@/widgets/book-list'
import { useBookModel } from '@/entities/book'
import { EmptyText } from '@/shared/ui/empty-text'

useHead({
  title: 'Polka - Прочитанное'
})

const bookModel = useBookModel()

// COMPUTED
const isShowBookshelf = computed((): boolean => bookModel.bookshelf.length > 0)
</script>
